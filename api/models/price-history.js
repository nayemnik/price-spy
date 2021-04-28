const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Product = require('./product');

const Schema = mongoose.Schema;

const PriceHistorySchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: Product, index: true },
    maxActivityAmount: { type: Schema.Types.Mixed },
    minActivityAmount: { type: Schema.Types.Mixed },
    maxAmount: { type: Schema.Types.Mixed, required: true },
    minAmount: { type: Schema.Types.Mixed, required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

PriceHistorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('PriceHistory', PriceHistorySchema, 'price_history');
