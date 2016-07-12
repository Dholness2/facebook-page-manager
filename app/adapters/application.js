
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
//store: Ember.inject.service(),


  host:'https://graph.facebook.com/v2.2',
//  nameSpace:'v2.3',
  pathForType: function(type) {
    return ("me/" + 'accounts?access_token='+ localStorage.getItem('token'));
  },

 //headers:  function() {
   //    return {'access_token': localStorage.getItem('token')};
   //  }.property().volatile()
});
