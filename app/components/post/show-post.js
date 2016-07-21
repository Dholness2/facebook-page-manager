import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deletePost() {
        let currentPost= this.get('model');
        currentPost.destroyRecord();
    }
  }
});
