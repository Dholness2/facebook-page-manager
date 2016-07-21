import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    save () {
      var self = this;
      this.get('post').set('page', this.get('page'));
      this.get('post').set('is_published',true);
      this.get('post').save().then(function() {
          self.router.transitionTo('page/show', self.get('page'));
      });
    },

    cancel () {
      console.log('+- cancel action in edit-form component');
    }
  }
});
