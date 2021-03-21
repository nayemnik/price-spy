const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const _ = require('lodash')
const Review = require('./review')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  activityPrice: { type: String },
  uri: { type: String, required: true },
  description: { type: String },
  specs: { type: Object },
  thumbnail_uri: { type: String },
  recent_order: { type: Number },
  status: { type: Number, required: true },
  scraper_ip: { type: String },
  store: { type: Schema.Types.ObjectId, ref: 'Store' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
ProductSchema.virtual('reviews', {
  ref: Review,
  localField: '_id',
  foreignField: 'product'
})

ProductSchema.plugin(mongoosePaginate)

ProductSchema.static('search', async function search (query) {
  const result = await this.paginate(
    {
      $text: { $search: query.query }
    },
    {
      lean: true,
      populate: ['reviews'],
      ...query
    }
  )
  for (const product of result.docs) {
    product.rating = product.reviews.length ? _.sumBy(product.reviews, 'rating') / product.reviews.length : 0
  }
  return result
})

module.exports = mongoose.model('Product', ProductSchema, 'products')
