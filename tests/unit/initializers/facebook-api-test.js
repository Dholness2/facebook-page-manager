import Ember from 'ember';
import FacebookApiInitializer from 'page-manager/initializers/facebook-api';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | facebook api', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  FacebookApiInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
