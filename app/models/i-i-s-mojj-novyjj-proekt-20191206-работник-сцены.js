import { Model as РаботникСценыMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-mojj-novyjj-proekt-20191206-работник-сцены';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, РаботникСценыMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
