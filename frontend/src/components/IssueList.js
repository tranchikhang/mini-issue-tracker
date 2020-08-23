var m = require('mithril');

var Issue = require('../models/Issue');

let IssueList = {
    oninit: Issue.getList,
    view: function() {
        return m('div', {
            class: 'issue-list'
        }, [
            m('div', {
                class: 'header'
            }, [
                m('div', {
                        class: 'issue-id'
                    },
                    ' ID '
                ),
                m('div', {
                        class: 'issue-status'
                    },
                    ' Status '
                ),
                m('div', {
                        class: 'issue-priority'
                    },
                    ' Priority '
                ),
                m('div', {
                        class: 'issue-summary'
                    },
                    ' Summary '
                ),
                m('div', {
                        class: 'issue-pic'
                    },
                    ' Person in Charge '
                )
            ]),
            Issue.list.map(function(issue) {
                return m('div', {
                    class: 'issue',
                    onclick() {
                        // m.route.set('/dashboard');
                    }
                }, [
                    m('div', {
                            class: 'issue-id'
                        },
                        issue.id
                    ),
                    m('div', {
                            class: 'issue-status'
                        },
                        m('span', {
                                class: issue.statusClass
                            },
                            issue.status
                        )
                    ),
                    m('div', {
                            class: 'issue-priority'
                        },
                        m('span', {
                                class: issue.priorityClass
                            },
                            issue.priority
                        )
                    ),
                    m('div', {
                            class: 'issue-summary'
                        },
                        issue.summary
                    ),
                    m('div', {
                            class: 'issue-pic'
                        },
                        issue.pic
                    )
                ])
            })
        ])
    }
}

module.exports = IssueList