import Ember from 'ember';

export default Ember.Route.extend({


  beforeModel: function() {
    return this.get("session").fetch().catch(function() {
  });
  },

 model() {
   console.log(this.get('session.currentUser'));
   return  this.get('store').query('account', { filter: { userId: this.get('currentUser.uId')} });
 }

});
