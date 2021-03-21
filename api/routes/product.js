const _ = require('lodash')
const { Router } = require('express')

const Product = require('../models/product')

const router = Router()

router.get('/:id', async function (req, res) {
  const id = req.params.id
  const product = await Product.findById(id).lean().populate('reviews')
  product.rating = product.reviews.length ? _.sumBy(product.reviews, 'rating') / product.reviews.length : 0
  res.json(product)
})

module.exports = router
