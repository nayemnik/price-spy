import { Types } from 'mongoose';

const ObjectId = Types.ObjectId;
function idFromSlug(slug) {
  const parts = slug.split('-');
  if (parts.length < 2) return;
  const id = parts.slice(-1)[0];
  return ObjectId.isValid(id) ? id : null;
}

export { idFromSlug };
