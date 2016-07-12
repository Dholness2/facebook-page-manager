import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
         
  },
  
  model(){
    console.log(this.get('session.currentUser'));
  }
});
