import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  urlForFindRecord(id, modelName, snapShot){
    return `${this.host}/${id}?fields=access_token,name&access_token=${localStorage.getItem('token')}`;
  },
});
