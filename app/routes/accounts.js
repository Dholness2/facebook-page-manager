import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    return this.get("session").fetch().catch(function() {});
  },

  model() {
    return  this.get('store').query('account', { filter: { userId: this.get('currentUser.uId')} });
  }
});
