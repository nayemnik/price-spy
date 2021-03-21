const { Router } = require('express')

const Category = require('../models/category')

const router = Router()

router.get('/', async function (req, res) {
  const cates = await Category.find({ parent: { $exists: false } }).lean().populate('children')
  res.json(cates)
})

router.get('/:id', async function (req, res) {
  const cate = await Category.findById(req.params.id).lean().populate('children')
  res.json(cate)
})

module.exports = router
