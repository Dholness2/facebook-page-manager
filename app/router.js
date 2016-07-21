import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('page/index', {path: '/pages'});
  this.route('page/show', { path: '/page/:page_id'});
  this.route('post/new', {path: '/page/:page_id/post/new'});
  this.route('post/new-unpublished', {path:'/page/:page_id/post/new-unpublished'});
  this.route('post/edit-unpublished', {path:'/post/:unpublished-post-id/post/edit-unpublished'});
  this.route('post', function() {
    this.route('edit',{path:'/post/edit/:post_id'});
  });
});

export default Router;
