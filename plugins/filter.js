import Vue from 'vue';
import { format as formatDate, formatDistanceToNow } from 'date-fns';

Vue.filter('date', function (date, format) {
  if (!date) return date;
  return formatDate(new Date(date), format || 'MM-dd-yyyy');
});

Vue.filter('dateToNow', function (date, options = {}) {
  if (!date) return date;
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    ...options,
  });
});
