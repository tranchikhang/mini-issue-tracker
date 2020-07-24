var m = require("mithril")

var Login = require('./views/Login');

m.route(document.body, '/login', {
    '/login': {
    	render: function() {
            return m(Login);
        }
    },
    '/dashboard': {
        render: function() {
            return m.render(document.body, "Hello world");
        },
    }
})
