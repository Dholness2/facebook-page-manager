/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'page-manager',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    torii: {
      sessionServiceName: 'session',
      providers: {
        'facebook-connect': {
          appId: '1056050657812944',
          scope: 'email,user_birthday'
      }
     }
   },
    firebase: {
      apiKey: "AIzaSyAho702zgbm0h2eRrKRv3rjG-_RWoiNOK8",
      authDomain: "facebookmanager-33ef2.firebaseapp.com",
      databaseURL: "https://facebookmanager-33ef2.firebaseio.com",
      storageBucket: "facebookmanager-33ef2.appspot.com",
    },
    FB: {
      appId: '1056050657812944',
      version: 'v2.6',
      xfbml: true
    }, 

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
