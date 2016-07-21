import Ember from 'ember';

export default Ember.Route.extend({

 model(params) {
   return this.get('store').findRecord('page', params.page_id);
 },

 actions: {

   rerender() {
     this.rerender();
   }
 }
});
