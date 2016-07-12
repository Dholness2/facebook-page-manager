import Model from 'ember-data/model';
 import attr from 'ember-data/attr';
 import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
   name: attr('string'),
//    id: attr('string'),
   acessToken: attr('string'),
   category: attr('string')
});
