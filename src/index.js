import m from 'mithril';

import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';
import i18n from './components/common/i18n';


i18n.init().then(function() {
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
        },
        '/project/:id/issue/:id': {
            render: function(vnode) {
                return m(Layout, m(IssueDetail, vnode.attrs));
            },
        }
    })
});