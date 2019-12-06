import { Serializer as МикрофонSerializer } from
  '../mixins/regenerated/serializers/mic';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МикрофонSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
