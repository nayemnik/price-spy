const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
  cate_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  img: { type: String },
  parent: { type: Schema.Types.ObjectId, ref: 'Category' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

CategorySchema.virtual('children', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'parent'
})

CategorySchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Category', CategorySchema, 'categories')
