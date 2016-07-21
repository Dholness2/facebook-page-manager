import Model from 'ember-data/model';
 import attr from 'ember-data/attr';
 import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  category: attr('string'),
  access_token: attr('string'),
  page: belongsTo('page', { async: true })
});
