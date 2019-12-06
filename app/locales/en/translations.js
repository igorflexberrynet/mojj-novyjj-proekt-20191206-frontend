import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMojj_novyjj_proekt_20191206МикрофонLForm from './forms/i-i-s-mojj-novyjj-proekt-20191206-микрофон-l';
import IISMojj_novyjj_proekt_20191206РаботникСценыLForm from './forms/i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-l';
import IISMojj_novyjj_proekt_20191206СценаLForm from './forms/i-i-s-mojj-novyjj-proekt-20191206-сцена-l';
import IISMojj_novyjj_proekt_20191206МикрофонEForm from './forms/i-i-s-mojj-novyjj-proekt-20191206-микрофон-e';
import IISMojj_novyjj_proekt_20191206РаботникСценыEForm from './forms/i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-e';
import IISMojj_novyjj_proekt_20191206СценаEForm from './forms/i-i-s-mojj-novyjj-proekt-20191206-сцена-e';
import IISMojj_novyjj_proekt_20191206РаботникСценыModel from './models/i-i-s-mojj-novyjj-proekt-20191206-работник-сцены';
import IISMojj_novyjj_proekt_20191206СценаModel from './models/i-i-s-mojj-novyjj-proekt-20191206-сцена';
import MicModel from './models/mic';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены': IISMojj_novyjj_proekt_20191206РаботникСценыModel,
    'i-i-s-mojj-novyjj-proekt-20191206-сцена': IISMojj_novyjj_proekt_20191206СценаModel,
    'mic': MicModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'mojj-novyjj-proekt-20191206': {
          caption: 'mojj-novyjj-proekt-20191206',
          title: 'mojj-novyjj-proekt-20191206',
          'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-l': {
            caption: 'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-l',
            title: 'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-l'
          },
          'i-i-s-mojj-novyjj-proekt-20191206-микрофон-l': {
            caption: 'i-i-s-mojj-novyjj-proekt-20191206-микрофон-l',
            title: 'i-i-s-mojj-novyjj-proekt-20191206-микрофон-l'
          },
          'i-i-s-mojj-novyjj-proekt-20191206-сцена-l': {
            caption: 'i-i-s-mojj-novyjj-proekt-20191206-сцена-l',
            title: 'i-i-s-mojj-novyjj-proekt-20191206-сцена-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-mojj-novyjj-proekt-20191206-микрофон-l': IISMojj_novyjj_proekt_20191206МикрофонLForm,
    'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-l': IISMojj_novyjj_proekt_20191206РаботникСценыLForm,
    'i-i-s-mojj-novyjj-proekt-20191206-сцена-l': IISMojj_novyjj_proekt_20191206СценаLForm,
    'i-i-s-mojj-novyjj-proekt-20191206-микрофон-e': IISMojj_novyjj_proekt_20191206МикрофонEForm,
    'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-e': IISMojj_novyjj_proekt_20191206РаботникСценыEForm,
    'i-i-s-mojj-novyjj-proekt-20191206-сцена-e': IISMojj_novyjj_proekt_20191206СценаEForm,
  },

});

export default translations;
