var m = require('mithril');

var showBurgerMenu = false;

let Layout = {
    view: function(vnode) {
        return [m('nav', {
                'class': 'navbar is-info',
                'role': 'navigation',
                'aria-label': 'main navigation'
            }, [
                m('div', {
                    'class': 'navbar-brand'
                }, [
                    m('a', {
                            'class': 'navbar-item is-size-5'
                        },
                        'Mini Issue Tracker'
                    ),
                    m('a', {
                        'class': [
                            'navbar-burger', showBurgerMenu ? 'is-active' : ''
                        ].join(' '),
                        'role': 'button',
                        'aria-label': 'menu',
                        'aria-expanded': 'false',
                        'data-target': 'navBar',
                        onclick: function() {
                            showBurgerMenu = !showBurgerMenu;
                        }
                    }, [
                        m('span', {
                            'aria-hidden': 'true'
                        }),
                        m('span', {
                            'aria-hidden': 'true'
                        }),
                        m('span', {
                            'aria-hidden': 'true'
                        })
                    ])
                ]),
                m('div', {
                    'class': [
                        'navbar-menu', showBurgerMenu ? 'is-active' : ''
                    ].join(' '),
                    'id': 'navBar'
                }, [
                    m('div', {
                        'class': 'navbar-start'
                    }, [
                        m('a', {
                                'class': 'navbar-item'
                            },
                            'Dashboard'
                        ),
                        m('div', {
                            'class': 'navbar-item has-dropdown is-hoverable'
                        }, [
                            m('a', {
                                    'class': 'navbar-link'
                                },
                                'Projects'
                            ),
                            m('div', {
                                'class': 'navbar-dropdown'
                            }, [
                                m('a', {
                                        'class': 'navbar-item',
                                        onclick: function () {
                                            m.route.set('/dashboard');
                                        }
                                    },
                                    'Recent'
                                ),
                                m('hr', {
                                    'class': 'navbar-divider'
                                }),
                                m('a', {
                                        'class': 'navbar-item',
                                        onclick: function () {
                                            m.route.set('/dashboard');
                                        }
                                    },
                                    'View All Projects'
                                )
                            ])
                        ])
                    ]),
                    m('div', {
                            'class': 'navbar-end'
                        },
                        m('div', {
                            'class': 'navbar-item has-dropdown is-hoverable'
                        }, [m('a', {
                                'class': 'navbar-link'
                            }, [
                                m('span', {
                                        'class': 'icon'
                                    },
                                    m('i', {
                                        'class': 'fas fa-user',
                                        'aria-hidden': 'true'
                                    })
                                ),
                                m('span',
                                    'Admin'
                                )
                            ]),
                            m('div', {
                                'class': 'navbar-dropdown'
                            }, [
                                m('a', {
                                        'class': 'navbar-item'
                                    },
                                    'Profile'
                                ),
                                m('a', {
                                        'class': 'navbar-item'
                                    },
                                    'Log out'
                                )
                            ])
                        ])
                    )
                ])
            ]),
            m('div', {
                class: 'container pt-5'
            }, vnode.children)
        ]
    }
}

module.exports = Layout