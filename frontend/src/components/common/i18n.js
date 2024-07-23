var m = require('mithril');
var en = require('../../lang/en.json');

let i18n = {
    defaultLocale: "en",
    messageUrl: "lang/{locale}.json",
    messages: {},

    init: function() {
        i18n.setLocale(i18n.getDefaultLocale());
    },

    getDefaultLocale: function() {
        return i18n.defaultLocale;
    },

    t: function(key) {
        return i18n.messages[key] || key;
    },

    setLocale: function(newLocale) {
        if (i18n.currentLocale === newLocale) {
            return;
        }
        i18n.currentLocale = newLocale;
        i18n.messageUrl = i18n.messageUrl.replace("{locale}", i18n.currentLocale);
        i18n.messages = require('../../' + i18n.messageUrl);
        m.request({
                method: "GET",
                url: i18n.messageUrl,
                // async: false
            })
            .then(function(result) {
                console.log(result);
                i18n.messages = result;
            });
    }
}

module.exports = i18n