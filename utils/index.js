import { Types } from 'mongoose';

const ObjectId = Types.ObjectId;
export function idFromSlug(slug = '') {
  const parts = slug.split('-');
  if (!parts.length) return;
  const id = parts.slice(-1)[0];
  return ObjectId.isValid(id) ? id : null;
}
