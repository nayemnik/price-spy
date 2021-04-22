import genSlug from 'slug';

function slug(...args) {
  return genSlug(args.join('-'));
}

export default (_, inject) => {
  inject('slug', slug);
};
