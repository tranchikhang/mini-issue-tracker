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
                        class: 'title mt-5'
                    },
                    IssueDetail.currentIssue.summary
                )),
            m('div', {
                class: 'block'
            }),
            m('h2', {
                    class: 'subtitle mt-5'
                },
                'Details'
            ),
            m('hr'),
            m('div', {
                class: 'columns'
            }, [
                m('div', {
                    class: 'column'
                }, [
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            'Type'),
                        m('span', {
                                class: IssueDetail.currentIssue.typeClass
                            },
                            IssueDetail.currentIssue.type
                        )
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            'Status'
                        ),
                        m('i', {
                            class: 'fa fa-circle ' + IssueDetail.currentIssue.statusClass
                        }),
                        IssueDetail.currentIssue.status
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            'Priority'),
                        m('span', {
                                class: IssueDetail.currentIssue.priorityClass
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
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            'Assignee'),
                        m('span', IssueDetail.currentIssue.assignee)
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            'Reporter'),
                        m('span', IssueDetail.currentIssue.assignee)
                    ]),
                ])
            ]),
            m('h2', {
                    class: 'subtitle mt-5'
                },
                'Description'
            ),
            m('hr'),
            m('div', {
                    class: 'description'
                },
                IssueDetail.currentIssue.description
            ),
            m('h2', {
                    class: 'subtitle mt-5'
                },
                'Discussion'
            ),
            m('hr'),
            m('div', {
                class: 'columns'
            }, [
                m('div', {
                    class: 'column is-half'
                }, m('article', {
                    'class': 'media'
                }, [
                    m('figure', {
                            'class': 'media-left'
                        },
                        m('p', {
                                'class': 'image is-64x64'
                            },
                            m('img', {
                                'class': 'avatar',
                                'src': 'frontend/assets/img/img_avatar.png'
                            })
                        )
                    ),
                    m('div', {
                        'class': 'media-content'
                    }, [
                        m('div', {
                                'class': 'field'
                            },
                            m('p', {
                                    'class': 'control'
                                },
                                m('textarea', {
                                    'class': 'textarea',
                                    'placeholder': 'Add a comment...'
                                })
                            )
                        ),
                        m('nav', {
                            'class': 'level'
                        }, [
                            m('div', {
                                    'class': 'level-left'
                                },
                                m('div', {
                                        'class': 'level-item'
                                    },
                                    m('a', {
                                            'class': 'button is-info'
                                        },
                                        'Submit'
                                    )
                                )
                            ),
                            m('div', {
                                    'class': 'level-right'
                                },
                                m('div', {
                                        'class': 'level-item'
                                    },
                                    m('label', {
                                        'class': 'checkbox'
                                    }, [
                                        m('input', {
                                            'type': 'checkbox'
                                        }),
                                        ' Press enter to submit '
                                    ])
                                )
                            )
                        ])
                    ])
                ]))
            ])
        ])
    }
}

module.exports = IssueDetail