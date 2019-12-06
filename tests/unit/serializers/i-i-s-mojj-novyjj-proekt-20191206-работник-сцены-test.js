import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mojj-novyjj-proekt-20191206-работник-сцены', 'Unit | Serializer | i-i-s-mojj-novyjj-proekt-20191206-работник-сцены', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-mojj-novyjj-proekt-20191206-работник-сцены',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-mojj-novyjj-proekt-20191206-работник-сцены',
    'model:i-i-s-mojj-novyjj-proekt-20191206-сцена',
    'model:mic'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
