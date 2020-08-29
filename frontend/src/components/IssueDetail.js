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
            m('h1', {
                    class: 'title'
                },
                'CSS layout error in login page'
            ),
            m('div', {
                class: 'quick-action'
            }, [
                m('button', {
                    class: 'button'
                }, [
                    m('span', {
                            class: 'icon'
                        },
                        m('i', {
                            class: 'fas fa-edit'
                        })),
                    m('span', 'Edit')
                ]),
                m('button', {
                    class: 'button'
                }, [
                    m('span', {
                            class: 'icon'
                        },
                        m('i', {
                            class: 'fas fa-comment'
                        })),
                    m('span', 'Comment')
                ])
            ]),
            m('h2', {
                    class: 'subtitle'
                },
                'Details'
            ),
            m('div', {
                class: 'attributes'
            }, [
                m('div', {
                    class: 'attributes-left'
                }, [
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
                    class: 'attributes-right'
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