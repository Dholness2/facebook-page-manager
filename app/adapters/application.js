import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host:'https://graph.facebook.com/v2.6',

  urlForFindAll(modelName) {
      return `${this.host}/me/accounts?access_token=${localStorage.getItem('token')}`;
  },

  urlForUpdateRecord(id, modelName, snapshot) {
      return `/${id}/feed?access_token=${snapshot.adapterOptions.token}`;
  }
});
