import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mojj-novyjj-proekt-20191206-микрофон-l');
  this.route('i-i-s-mojj-novyjj-proekt-20191206-микрофон-e',
  { path: 'i-i-s-mojj-novyjj-proekt-20191206-микрофон-e/:id' });
  this.route('i-i-s-mojj-novyjj-proekt-20191206-микрофон-e.new',
  { path: 'i-i-s-mojj-novyjj-proekt-20191206-микрофон-e/new' });
  this.route('i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-l');
  this.route('i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-e',
  { path: 'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-e/:id' });
  this.route('i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-e.new',
  { path: 'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-e/new' });
  this.route('i-i-s-mojj-novyjj-proekt-20191206-сцена-l');
  this.route('i-i-s-mojj-novyjj-proekt-20191206-сцена-e',
  { path: 'i-i-s-mojj-novyjj-proekt-20191206-сцена-e/:id' });
  this.route('i-i-s-mojj-novyjj-proekt-20191206-сцена-e.new',
  { path: 'i-i-s-mojj-novyjj-proekt-20191206-сцена-e/new' });
});

export default Router;
