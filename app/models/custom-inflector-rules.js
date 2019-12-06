import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('сцены', 'Сценыs');
inflector.irregular('сцена', 'Сценаs');
inflector.irregular('mic', 'Mics');

export default {};
