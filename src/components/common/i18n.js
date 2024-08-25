var m = require('mithril');
var en = require('../../resources/lang/message.en.json');
var jp = require('../../resources/lang/message.jp.json');

let i18n = {
    defaultLocale: "en",
    messageUrl: "resources/lang/message.{locale}.json",
    messages: {},

    init: function() {
        i18n.setLocale(i18n.getDefaultLocale());
    },

    getDefaultLocale: function() {
        return i18n.defaultLocale;
    },

    t: function(key) {
        return key.split('.').reduce((a, b) => a[b], i18n.messages) || key;
    },

    setLocale: function(newLocale) {
        if (i18n.currentLocale === newLocale) {
            return;
        }
        i18n.currentLocale = newLocale;
        i18n.messageUrl = i18n.messageUrl.replace("{locale}", i18n.currentLocale);
        i18n.messages = require('../../' + i18n.messageUrl);
    }
}

module.exports = i18n