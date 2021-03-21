const _ = require('lodash')
const { Router } = require('express')

const Category = require('../models/category')
const Product = require('../models/product')

const router = Router()

router.get('/:query', async function (req, res) {
  if (!req.params.query) {
    return res.send(500)
  }
  const query = { ...req.query, query: req.params.query }
  let cateGroups
  if (req.query.withCates) {
    const cateIds = await Product.aggregate([{ $match: { $text: { $search: query.query } } }, { $group: { _id: '$category', count: { $sum: 1 } } }, { $sort: { count: -1 } }])
    const topCateIds = cateIds.splice(0, 11)
    const topCates = await Category.find({ _id: { $in: topCateIds.map(c => c._id) } }).lean()
    cateGroups = _.orderBy([
      ...topCateIds.map(e => ({
        _ids: [e._id],
        count: e.count,
        name: e._id ? topCates.find(c => c._id.toString() === e._id.toString())?.name : 'Unknown'
      })),
      cateIds.reduce((result, e) => {
        result._id.push(e._id)
        result.count += e.count
        return result
      }, { _id: [], count: 0, name: 'Others' })
    ], 'count', 'desc')
  }
  const result = await Product.search(query)
  res.json({
    result,
    cateGroups
  })
})

module.exports = router
