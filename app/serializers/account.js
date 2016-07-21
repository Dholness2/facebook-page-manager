import DS from 'ember-data';

export default DS.RESTSerializer.extend({  

  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    payload['accounts'] = payload['data'];
    delete payload['data'];
    payload.accounts.forEach((account) => {
      account.links = {
        page: '/'+ account.id +'?fields=access_token,name&access_token='+ account.access_token
      }
    });
    return this._super(...arguments);
  }
});
