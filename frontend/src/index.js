var m = require("mithril")

var Login = require('./components/Login');
var Layout = require('./components/Layout');
var Dashboard = require('./components/Dashboard');
var Project = require('./components/Project');

m.route(document.body, '/login', {
    '/login': {
        render: function() {
            return m(Login);
        }
    },
    '/dashboard': {
        render: function(vnode) {
            return m(Layout, m(Dashboard));
        },
    },
    '/project/:id': {
        render: function(vnode) {
            return m(Layout, m(Project));
        },
    }
})