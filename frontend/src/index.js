var m = require("mithril")

var Login = require('./components/Login');
var Layout = require('./components/Layout');

m.route(document.body, '/login', {
    '/login': {
        render: function() {
            return m(Login);
        }
    },
    '/dashboard': {
        render: function() {
            return m(Layout);
        },
    }
})