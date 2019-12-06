import { Model as МикрофонMixin, defineProjections } from
  '../mixins/regenerated/models/mic';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, МикрофонMixin, {

});

defineProjections(Model);
export default Model;
