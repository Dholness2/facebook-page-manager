import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  link: {
      postUrl: '/posts',
      unpublishedPosts: 'include_hidden=true',
      postFields:"is_published,message,created_time",
      promotablePosts: 'promotable_posts',
      promotablFields: 'fields=is_published,message,created_time',
      unpublished: 'is_published=false',
      tokenField:'access_token=',
      hostUrl: '/'
  },

  addPostsLinks (page) {
    var link = this.link;
    page.links = {
        posts:`${link.hostUrl}${page.id}${link.postUrl}?fields=${link.postFields}`
              +`&${link.unpublishedPosts}&${link.tokenField}`
              +`${page.access_token}`,

       unpublished_posts:`${link.hostUrl}${page.id}/${link.promotablePosts}`
                        +`?${link.promotableFields}&${link.unpublished}`
                        +`&${link.tokenField}${page.access_token}`
    };
  },

  normalizeResponse (store, primaryModelClass, payload, id, requestType) {
       this.addPostsLinks(payload);
       return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
