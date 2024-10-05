import m from 'mithril';
import en from '../../resources/lang/message.en.json';
import jp from '../../resources/lang/message.jp.json';
import config from '../../config/config';

let i18n = {
    defaultLocale: config.DEFAULT_LOCALE,
    messageUrl: "resources/lang/message.{locale}.json",
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
        i18n.messageUrl = i18n.messageUrl.replace("{locale}", i18n.currentLocale);
        
        return m.request({
            method: 'GET',
            url: `${config.LOCALIZATION_URL}message.${i18n.currentLocale}.json`
        })
        .then(function(result) {
            i18n.messages = result;
            console.log('language is loaded');
        });
    }
}

export default i18n;