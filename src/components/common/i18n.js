import m from 'mithril';
import config from '../../config/config';


const urlTemplate = "resources/lang/message.{locale}.json";

let i18n = {
    defaultLocale: config.DEFAULT_LOCALE,
    messages: {},
    currentLocale: '',

    init: function() {
        return i18n.setLocale(i18n.getDefaultLocale());
    },

    getDefaultLocale: function() {
        return i18n.defaultLocale;
    },

    t: function(key) {
        return key.split('.').reduce((a, b) => a[b], i18n.messages) || key;
    },

    setLocale: function(newLocale) {
        if (i18n.currentLocale === newLocale) {
            return Promise.resolve();
        }
        i18n.currentLocale = newLocale;
        i18n.messageUrl = urlTemplate.replace("{locale}", i18n.currentLocale);

        if (process.env.NODE_ENV === 'development') {
            i18n.messageUrl += `?v=${Date.now()}`;
        }

        return m.request({
            method: 'GET',
            url: i18n.messageUrl
        })
        .then(function(result) {
            i18n.messages = result;
            console.log('language is loaded');
        });
    }
}

export default i18n;