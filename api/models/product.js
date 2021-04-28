const mongoose = require('mongoose');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const mongoosePaginate = require('mongoose-paginate-v2');
const _ = require('lodash');
const { differenceInDays } = require('date-fns');

const Review = require('./review');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
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
    // scraper_ip: { type: String },
    store: { type: Schema.Types.ObjectId, ref: 'Store' },
    category: { type: Schema.Types.ObjectId, ref: 'Category', index: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const reviewLimits = differenceInDays(new Date(), new Date(2021, 3, 27));
ProductSchema.virtual('reviews', {
  ref: Review,
  localField: '_id',
  foreignField: 'product',
  perDocumentLimit: reviewLimits,
  options: { sort: { date: 1 } },
});
ProductSchema.virtual('rating').get(function () {
  return this.reviews.length ? _.sumBy(this.reviews, 'rating') / this.reviews.length : 0;
});
ProductSchema.virtual('reviewCount').get(function () {
  return this.reviews.length;
});

ProductSchema.plugin(mongooseLeanVirtuals);
ProductSchema.plugin(mongoosePaginate);

ProductSchema.static('search', async function search(query) {
  const result = await this.paginate(
    {
      $text: { $search: query.query },
    },
    {
      lean: { virtuals: true },
      populate: ['reviews'],
      ...query,
    }
  );
  return result;
});

module.exports = mongoose.model('Product', ProductSchema, 'products');
