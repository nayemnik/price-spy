const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    id: { type: Number, required: true },
    uri: { type: String, required: true },
    name: { type: String, required: true },
    total: { type: Number },
    status: { type: Number, required: true },
    updated_at: { type: Date, default: Date.now() },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('Store', ProductSchema, 'stores');
