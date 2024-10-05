import m from 'mithril';

var showBurgerMenu = false;
import i18n from '../components/common/i18n';

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
                            'class': 'navbar-item is-size-5',
                            onclick: () => {
                                m.route.set('/dashboard');
                            }
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
                                'class': 'navbar-item',
                                onclick: () => {
                                    m.route.set('/dashboard');
                                }
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
                                        onclick: function() {
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
                                        onclick: function() {
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
                    }, [
                        m('a', {
                            'class': 'navbar-item has-dropdow is-hoverable'
                        }, [
                            m('span', {
                                    'class': 'icon'
                                },
                                m('i', {
                                    'class': 'fas fa-bell',
                                    'aria-hidden': 'true'
                                })
                            ),
                            m('div', {
                                'class': 'navbar-dropdown is-right'
                            }, [
                                m('div', {
                                    'class': 'notification is-link is-light mb-2'
                                }, [
                                    m('button', {
                                        'class': 'delete'
                                    }),
                                    m.trust('<strong>User A</strong> assigned <a>DB investigation</a> to you')
                                ], ),
                                m('div', {
                                    'class': 'notification is-link is-light mb-2'
                                }, [
                                    m('button', {
                                        'class': 'delete'
                                    }),
                                    m.trust('<strong>User A</strong> assigned <a>DB investigation</a> to you')
                                ], ),
                                m('div', {
                                    'class': 'notification is-link is-light mb-2'
                                }, [
                                    m('button', {
                                        'class': 'delete'
                                    }),
                                    m.trust('<strong>User A</strong> assigned <a>DB investigation</a> to you')
                                ], )
                            ])
                        ]),
                        m('div', {
                            'class': 'navbar-item has-dropdown is-hoverable'
                        }, [
                            m('a', {
                                'class': 'navbar-link'
                            }, [
                                m('span', {
                                        'class': 'icon'
                                    },
                                    m('i', {
                                        'class': 'fa fas fa-language',
                                        'aria-hidden': 'true'
                                    })
                                )
                            ]),
                            m('div', {
                                'class': 'navbar-dropdown'
                            }, [
                                m('a', {
                                        'class': 'navbar-item',
                                        onclick: function() {
                                            i18n.setLocale('jp');
                                        },
                                    },
                                    'Japanese'
                                ),
                                m('a', {
                                        'class': 'navbar-item',
                                        onclick: function() {
                                            i18n.setLocale('en');
                                        },
                                    },
                                    'English'
                                )
                            ])
                        ]),
                        m('div', {
                            'class': 'navbar-item has-dropdown is-hoverable'
                        }, [
                            m('a', {
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
                    ])
                ])
            ]),
            m('div', {
                class: 'container pt-5'
            }, vnode.children)
        ]
    }
}

export default Layout;