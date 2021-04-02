const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    username: String,
    country_code: String,
    rating: Number,
    content: String,
    date: Date,
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
  },
  {
    timestamps: {
      createdAt: false,
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('Review', ReviewSchema, 'reviews');
