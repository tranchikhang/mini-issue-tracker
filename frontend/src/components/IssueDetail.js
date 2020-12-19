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
                'People'
            ),
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
                ]),
                m('div', {
                    class: 'attributes-item'
                }, [
                    m('strong', {
                            class: 'label'
                        },
                        'Reporter'),
                    m('span', {
                            class: 'value'
                        },
                        IssueDetail.currentIssue.assignee
                    )
                ]),
                m('div', {
                    class: 'attributes-item'
                }, [
                    m('strong', {
                            class: 'label'
                        },
                        'Watchers'),
                    m('span', {
                            class: 'value'
                        },
                        3
                    )
                ])
            ]),
            m('h2', {
                    class: 'subtitle'
                },
                'Description'
            ),
            m('div', {
                    class: 'description'
                },
                'DIV\'s are miscalculated.\r\nThe css rule clearly refers to an even or odd DIV, but instead all elements are counted, this includes the <br> elements. This leads to the situation, that the last two DIV get the same background color, which is not what was intended.\r\nExpected results:\r\nthe <br> are not referred to, so they do not count for the even or odd calculation of those DIV\'s. The last and the second last DIV should end up with different background colors.'
            )
        ])
    }
}

module.exports = IssueDetail