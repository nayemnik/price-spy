const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;
const modelName = 'Category';
const CategorySchema = new Schema(
  {
    cate_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
    img: { type: String },
    parent: { type: Schema.Types.ObjectId, ref: 'Category' },
    ancestors: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

CategorySchema.virtual('children', {
  ref: 'Category',
  localField: '_id',
  foreignField: 'parent',
});

CategorySchema.plugin(mongoosePaginate);

CategorySchema.methods.buildAncestors = async function () {
  const Category = mongoose.model(modelName);
  if (!this.parent) return;
  const parentCat = await Category.findById(this.parent, { _id: 1, ancestors: 1 });
  if (!parentCat) return;
  let parentAncest = parentCat.ancestors || [];
  if (parentCat.parent && (!Array.isArray(parentCat.ancestors) || !parentCat.ancestors.length)) {
    parentAncest = await parentCat.buildAncestors();
  }
  const ancest = [...parentAncest];
  ancest.unshift(this.parent);
  await this.updateOne({ $set: { ancestors: ancest } });
  return ancest;
};

module.exports = mongoose.model(modelName, CategorySchema, 'categories');
