import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  фИО: DS.attr('string'),
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
  modelClass.defineProjection('РаботникСценыE', 'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены', {
    фИО: Projection.attr('ФИО', { index: 0 })
  });
  modelClass.defineProjection('РаботникСценыL', 'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены', {
    фИО: Projection.attr('ФИО', { index: 0 })
  });
};
