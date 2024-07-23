var m = require('mithril');

var Issue = require('../models/Issue');

let IssueList = {
    oninit: Issue.getList,
    view: () => {
        return m('div', {
            class: 'issue-list'
        }, [
            m('div', {
                class: 'header issue',
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
                        class: 'issue-assignee'
                    },
                    ' Assignee '
                )
            ]),
            Issue.list.map(issue => {
                return m('div', {
                    class: 'issue',
                    onclick: () => {
                        m.route.set('/project/1/issue/' + issue.id);
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
                        m('i', {
                            class: 'fa fa-circle ' + issue.statusClass
                        }),
                        issue.status
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
                            class: 'issue-assignee'
                        },
                        issue.assignee
                    )
                ])
            })
        ]);
    }
}

module.exports = IssueList