import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Mojj_novyjj_proekt_20191206',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Mojj_novyjj_proekt_20191206',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mojj_novyjj_proekt_20191206',
          title: 'Mojj_novyjj_proekt_20191206'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'mojj-novyjj-proekt-20191206': {
          caption: 'Mojj_novyjj_proekt_20191206',
          title: 'Mojj_novyjj_proekt_20191206',
          'i-i-s-mojj-novyjj-proekt-20191206-работник-сцены-l': {
            caption: 'Работник сцены',
            title: ''
          },
          'i-i-s-mojj-novyjj-proekt-20191206-микрофон-l': {
            caption: 'Микрофон',
            title: ''
          },
          'i-i-s-mojj-novyjj-proekt-20191206-сцена-l': {
            caption: 'Сцена',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
