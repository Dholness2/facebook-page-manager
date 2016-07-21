import Ember from 'ember';

export default Ember.Route.extend({

 model(params) {
   return Ember.RSVP.hash({ 
     page: this.store.find('page',params.page_id),
     post: this.store.createRecord('post')
   });
 }
});
