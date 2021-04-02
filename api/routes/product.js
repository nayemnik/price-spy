const { Router } = require('express');

const Product = require('../models/product');
const Category = require('../models/category');

const router = Router();

router.get('/:id', async function (req, res) {
  const id = req.params.id;
  const product = await Product.findById(id).lean({ virtuals: true }).populate('reviews');
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
      ...req.query,
    }
  );
  res.json(products);
});

module.exports = router;
