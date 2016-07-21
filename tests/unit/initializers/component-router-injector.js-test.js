import Ember from 'ember';
import ComponentRouterInjector.JsInitializer from 'page-manager/initializers/component-router-injector.js';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | component router injector.js', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ComponentRouterInjector.JsInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
