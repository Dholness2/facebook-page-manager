import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  userName:DS.attr('string'),
  email: DS.attr('string'),
  userId: DS.attr('string'),
  accessToken: DS.attr('string'),
  accounts: hasMany('accounts'),
});
