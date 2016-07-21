import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
   name: attr('string'),
   access_token: attr('string'),
   account: belongsTo('account', {async: true}),
   posts: hasMany('post', {async:true }),
   unpublished_posts: hasMany('unpublished-post', {async: true}),
});
