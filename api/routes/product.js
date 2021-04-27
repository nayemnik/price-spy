const { Router } = require('express');

const Product = require('../models/product');
const Category = require('../models/category');

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
  res.json(product);
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
      limit: 16,
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
