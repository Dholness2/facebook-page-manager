import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  link: {
      insightQuery: '/insights/post_impressions_unique/lifetime',
      tokenField:'access_token=',
  },

  addInsightLink(post) {
    var link = this.link;
    var token = post.get('page.access_token');
    post.links = {
        insights:`${link.hostUrl}${post.id}${link.insightQuery}&${link.tokenField}`
                 +`${token}`
    };
  }

//  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
  //  payload['posts'] = payload['data'];
  //  delete payload['data'];
  //  var self = this;
  //  payload.posts.forEach((post) => {
//      self.addInsightLink(post);
  //  });
   // return this._super(...arguments);
 // }
});
