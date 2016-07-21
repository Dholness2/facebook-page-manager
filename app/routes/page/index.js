import Ember from 'ember';
export default Ember.Route.extend({

  beforeModel() {
    return this.get("session").fetch().catch(function() {});
  },

  model() {
    return this.store.findAll('account');
  }
});
