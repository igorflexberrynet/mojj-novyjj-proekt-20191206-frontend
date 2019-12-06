import { Model as СценаMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-mojj-novyjj-proekt-20191206-сцена';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, СценаMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
