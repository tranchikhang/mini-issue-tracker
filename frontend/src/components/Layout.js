var m = require('mithril');

var showLogout = false;

let Layout = {
    view: function(vnode) {
        return [m('div', {
                class: 'nav'
            }, [
                m('div', {
                        class: 'nav-header'
                    },
                    m('div', {
                            class: 'nav-title'
                        },
                        'Mini Issue Tracker'
                    )
                ),
                m('ul', {
                    class: 'nav-links'
                }, m('li', {
                    class: 'user-name',
                    tabIndex: '-1',
                    onclick: function() {
                        showLogout = !showLogout;
                    },
                    onblur: function() {
                        showLogout = !showLogout;
                    }
                }, [
                    m('i', {
                        class: 'fas fa-user'
                    }),
                    'Profile'
                ], m('ul', {
                        class: [
                            'dropdown', !showLogout ? 'hidden' : ''
                        ].join(" ")
                    },
                    m('li',
                        m('a', {
                                href: '#'
                            },
                            'Log out'
                        )
                    )
                )))
            ]),
            m('div', {
                class: 'hero'
            }, m('div', {
                class: 'hero-body'
            }, [

                m('div', {
                    class: 'container'
                }, vnode.children)
            ]))
        ]
    }
}

module.exports = Layout