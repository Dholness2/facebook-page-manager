import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeSingleResponse (store, primaryModelClass, payload, id, requestType) {
    var typeKey = primaryModelClass.modelName;
    var update = new Object();
    update[typeKey] = payload;
    console.log(update);
    return this._normalizeResponse(store, primaryModelClass, update, id, requestType, true);
  },

  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
    var pluralTypeKey = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);
    payload[pluralTypeKey] = payload['data'];
    delete payload['data'];
    return this._normalizeResponse(store, primaryModelClass, payload, id, requestType, false);
  }
});
