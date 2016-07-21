import Model from 'ember-data/model';
 import attr from 'ember-data/attr';
 import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  message: attr('string'),
  created_time: attr('string'),
  is_hidden: attr('boolean'),
  is_published: attr('boolean'),
  page: belongsTo('page'),
  insight: belongsTo('insight')
});
