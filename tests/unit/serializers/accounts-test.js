import { moduleForModel, test } from 'ember-qunit';

moduleForModel('accounts', 'Unit | Serializer | accounts', {
  // Specify the other units that are required for this test.
  needs: ['serializer:accounts']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
