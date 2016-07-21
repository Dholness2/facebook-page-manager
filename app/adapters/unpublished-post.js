import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForFindRecord(id, modelName, snapShot){
    return `${this.host}/${id}?fields=access_token,name&access_token=${localStorage.getItem('token')}`;
  },

  urlForCreateRecord(modelName, snapshot) {
    let pageID = snapshot.belongsTo('page').id;
    let token =  snapshot.belongsTo('page').attr('access_token');
    let ispublished = snapshot.attr('is_published'); 
    let postMessage = snapshot.attr('message');
    return `${this.host}/${pageID}/feed?published=${ispublished}&message=${postMessage}`
            +`&access_token=${token}`;
  },

  urlForDeleteRecord(id, modelName, snapshot) {
    let token = snapshot.belongsTo('page').attr('access_token');
    return `${this.host}/${id}?&access_token=${token}`;
  },

  urlForUpdateRecord(id, modelName, snapshot) {
    let token =  snapshot.belongsTo('page').attr('access_token');
    let postMessage =  snapshot.attr('message');
    return `${this.host}/${id}?message=${postMessage}&access_token=${token}`;
  },

  ajaxOptions(url, type, hash) {
    hash = hash || {};
    if (type === 'PUT') {
      hash.data = hash.data || {};
      hash.data['_method'] = type;
      type = 'POST';
    }
    return this._super(url, type, hash);
  }
});
