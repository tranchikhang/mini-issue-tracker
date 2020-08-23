var m = require('mithril');

var Issue = require('../models/Issue');
var IssueDetail = require('./IssueDetail');

let IssueList = {
    oninit: Issue.getList,
    view: () => {
        return m('div', {
            class: 'columns'
        }, [
            m('div', {
                class: 'issue-list column' + (IssueDetail.isDisplayed ? ' is-one-quarter' : '')
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
                            class: 'issue-pic'
                        },
                        ' Person in Charge '
                    )
                ]),
                Issue.list.map(issue => {
                    return m('div', {
                        class: 'issue',
                        onclick: () => {
                            IssueDetail.show();
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
            ]),
            IssueDetail.isDisplayed && m(IssueDetail),
        ])
    }
}

module.exports = IssueList