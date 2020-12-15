var m = require('mithril');

var Issue = require('../models/Issue');

let IssueDetail = {
    currentIssue: null,
    oninit: function(vnode) {
        Issue.getList();
        IssueDetail.currentIssue = Issue.list.find(issue => issue.id == vnode.attrs.id);
    },
    view: () => {
        return m('div', {
            class: 'issue-detail'
        }, [
            m('div', {
                    class: 'block'
                },
                m('h1', {
                        class: 'title'
                    },
                    'CSS layout error in login page'
                )),
            m('div', {
                    class: 'block'
                },
                m('div', {
                        class: 'tabs'
                    },
                    m('ul', [
                        m('li', m('a', [
                            m('span', {
                                    class: 'icon'
                                },
                                m('i', {
                                    class: 'fas fa-edit'
                                })),
                            m('span', 'Edit')
                        ])),
                        m('li', m('a', [
                            m('span', {
                                    class: 'icon'
                                },
                                m('i', {
                                    class: 'fas fa-comment'
                                })),
                            m('span', 'Comment')
                        ])),
                        m('li', m('a', [
                            m('span', {
                                    class: 'icon'
                                },
                                m('i', {
                                    class: 'fas fa-user'
                                })),
                            m('span', 'Assign')
                        ])),
                        m('li', m('a', [
                            m('span', {
                                    class: 'icon'
                                },
                                m('i', {
                                    class: 'fas fa-eye'
                                })),
                            m('span', 'Watch issue')
                        ])),
                        m('li', m('a', [
                            m('span', {
                                    class: 'icon'
                                },
                                m('i', {
                                    class: 'fas fa-code-branch'
                                })),
                            m('span', 'Create sub-task')
                        ])),
                        m('li', m('a', [
                            m('span', {
                                    class: 'icon'
                                },
                                m('i', {
                                    class: 'fas fa-clone'
                                })),
                            m('span', 'Clone')
                        ]))
                    ])
                )
            ),
            m('h2', {
                    class: 'subtitle'
                },
                'Details'
            ),
            m('div', {
                class: 'columns'
            }, [
                m('div', {
                    class: 'column'
                }, [
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('strong', {
                                class: 'label'
                            },
                            'Type'),
                        m('span', {
                                class: 'value' + IssueDetail.currentIssue.typeClass
                            },
                            IssueDetail.currentIssue.type
                        )
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('strong', {
                                class: 'label'
                            },
                            'Status'),
                        m('span', {
                                class: 'value ' + IssueDetail.currentIssue.statusClass
                            },
                            IssueDetail.currentIssue.status
                        )
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('strong', {
                                class: 'label'
                            },
                            'Priority'),
                        m('span', {
                                class: 'value ' + IssueDetail.currentIssue.priorityClass
                            },
                            IssueDetail.currentIssue.priority
                        )
                    ])
                ]),
                m('div', {
                    class: 'column'
                }, [
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('strong', {
                                class: 'label'
                            },
                            'Assignee'),
                        m('span', {
                                class: 'value'
                            },
                            IssueDetail.currentIssue.assignee
                        )
                    ])
                ])
            ]),
            m('h2', {
                    class: 'subtitle'
                },
                'Details'
            ),
            m('div', {
                class: 'columns'
            }),
            m('div', {
                class: 'description'
            }, [
                m('h2', {
                        class: 'subtitle'
                    },
                    'Description'
                ),
                m('div', {
                        class: ''
                    },
                    'Smart Attachments add-on is compatible with GoEdit add-on.With the junction of these two add-ons, you can directly edit files and keep each revision under the same document. Note! While trying to edit an attachment with GoEdit add-on, you will be prompted to download the application for processing attachments.'
                )
            ])
        ])
    }
}

module.exports = IssueDetail