import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  площадь: DS.attr('number'),
  работникСцены: DS.belongsTo('i-i-s-mojj-novyjj-proekt-20191206-работник-сцены', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export function defineNamespace(modelClass) {
  modelClass.reopenClass({
    namespace: 'IIS.Mojj_novyjj_proekt_20191206',
  });
}

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СценаE', 'i-i-s-mojj-novyjj-proekt-20191206-сцена', {
    площадь: Projection.attr('Площадь', { index: 0 }),
    работникСцены: Projection.belongsTo('i-i-s-mojj-novyjj-proekt-20191206-работник-сцены', 'Работник сцены', {
      фИО: Projection.attr('ФИО', { index: 2 })
    }, { index: 1 })
  });
  modelClass.defineProjection('СценаL', 'i-i-s-mojj-novyjj-proekt-20191206-сцена', {
    площадь: Projection.attr('Площадь', { index: 0 }),
    работникСцены: Projection.belongsTo('i-i-s-mojj-novyjj-proekt-20191206-работник-сцены', 'ФИО', {
      фИО: Projection.attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
