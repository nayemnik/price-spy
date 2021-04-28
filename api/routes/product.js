const { Router } = require('express');
const { Types } = require('mongoose');
const { differenceInDays } = require('date-fns');

const Product = require('../models/product');
const Category = require('../models/category');
const Review = require('../models/review');
const PriceHistory = require('../models/price-history');

const router = Router();
module.exports = router;

router.get('/new', async function (req, res) {
  try {
    const newProducts = await Product.find({ status: 2 })
      .sort({ updated_at: -1 })
      .limit(16)
      .populate('reviews category')
      .lean({ virtuals: true });
    res.json(newProducts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/:id', async function (req, res) {
  const id = req.params.id;
  const product = await Product.findById(id)
    .lean({ virtuals: true })
    .populate(req.query.populate || 'reviews');
  const { reviews, ...others } = product;
  res.json(others);
});

const reviewLimits = differenceInDays(new Date(), new Date(2021, 3, 27));
router.get('/:id/reviews', async function (req, res) {
  const id = req.params.id;
  const reviews = await Review.find({ product: id }, null, {
    lean: true,
    sort: { date: 1 },
    limit: reviewLimits,
  });
  const query = req.query;
  const page = +query.page || 1;
  const limit = +query.limit || 20;
  const offset = limit * (page - 1);
  const docs = reviews.slice(offset, limit * page);
  const totalPages = Math.ceil(reviews.length / limit);
  res.json({
    docs,
    hasPrevPage: offset > 0,
    hasNextPage: page < totalPages,
    limit,
    offset,
    page,
    totalDocs: reviews.length,
    totalPages,
  });
});

router.get('/:id/price-history', async function (req, res) {
  const id = req.params.id;
  const priceHistory = await PriceHistory.paginate(
    { product: id },
    {
      lean: true,
      ...req.query,
    }
  );
  res.json(priceHistory);
});
router.get('/:id/lowest-price', async function (req, res) {
  const id = req.params.id;
  const agg = await PriceHistory.aggregate([
    {
      $match: {
        product: Types.ObjectId(id),
      },
    },
    {
      $set: {
        price: {
          $min: ['$minAmount.value', '$minActivityAmount.value'],
        },
      },
    },
    { $sort: { price: 1 } },
    { $limit: 1 },
  ]);
  res.send(agg[0]);
});

router.get('/category/:id', async function (req, res) {
  const id = req.params.id;
  const childrenCate = await Category.find({ ancestors: id }, { _id: 1 }).lean();
  const cateIds = [id, ...childrenCate.map((c) => c._id)];
  const products = await Product.paginate(
    { category: { $in: cateIds } },
    {
      lean: { virtuals: true },
      populate: 'reviews',
      limit: 20,
      // sort: { updated_at: -1 },
      ...req.query,
    }
  );
  res.json(products);
});

router.get('/relates/:id', async function (req, res) {
  const id = req.params.id;
  const product = await Product.findById(id).lean();
  const relates = await Product.find({ _id: { $gt: id }, category: product.category })
    .limit(6)
    .populate('reviews category')
    .lean({ virtuals: true });
  res.json(relates);
});
