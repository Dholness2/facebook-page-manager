import Ember from 'ember';

export default Ember.Service.extend({

  api: [],

  setApi(api) {
    this.get('api').popObject();
    this.get('api').pushObject(api);
  },


  getApi() {
    return this.get('facebookApi').firstObject;
  }
});
