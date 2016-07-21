import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    save () {
      this.get('model.post').set('page', this.get('model.page'));
      this.get('model.post').save();
    },

    cancel () {
      console.log('+- cancel action in edit-form component');
    }
  }
});
