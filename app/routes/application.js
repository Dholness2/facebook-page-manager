import Ember from 'ember';

export default Ember.Route.extend({
//  session: Ember.inject.service(),

  beforeModel: function() {
    return this.get("session").fetch().catch(function() {
    });
  },


  createUser (accessToken) {
   var currentUser = this.get('session.currentUser');
   currentUser.set('token',accessToken);
   var user =  this.store.createRecord('User',{
      userName: currentUser.displayName,
      userId: currentUser.uid,
      email: currentUser.email,
      accessToken: accessToken
    });
    user.save();
  },

  updateUserToken (user,token) {
    user.set('token',token); 
    user.save();
  },

  actions: {
    signIn: function(provider) {
      var session = this.get("session");
      const self = this;
      session.open("firebase", { provider: provider,
                                scope: ' manage_pages,publish_pages'}).then(function(data) {
        console.log(FB.getAuthResponse);
        var token = FB.getAccessToken();
        localStorage.setItem('token',FB.getAccessToken());
      self.store.query('user', {orderBy: 'userId',equalTo: self.get('session.currentUser.uid')}).then(function (records){
        if(records.get('length') === 0) {  
          self.createUser(token); 
        } else {
          self.updateUserToken(records.get('firstObject'),token);
        }
      });
     });
    },

  signOut: function() {
      this.get("session").close();
    }
   }
});
