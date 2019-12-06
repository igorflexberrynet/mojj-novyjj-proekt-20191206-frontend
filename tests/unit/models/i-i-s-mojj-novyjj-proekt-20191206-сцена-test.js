import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mojj-novyjj-proekt-20191206-сцена', 'Unit | Model | i-i-s-mojj-novyjj-proekt-20191206-сцена', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-mojj-novyjj-proekt-20191206-работник-сцены',
    'model:i-i-s-mojj-novyjj-proekt-20191206-сцена',
    'model:mic'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
