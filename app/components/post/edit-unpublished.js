import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    save () {
      var self = this;
      this.get('model').save().then(function() {
        self.router.transitionTo('page/show', self.get('model.page'));
      });
    },

    cancel () {
      console.log('+- cancel action in edit-form component');
    }
  }
});
