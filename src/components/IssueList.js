var m = require('mithril');

var Issue = require('../models/Issue');
var i18n = require('../components/common/i18n');
var Constants = require('../resources/Constants.js');


let IssueList = {
    projectId: null,
    oninit: function(vnode) {
        projectId = vnode.attrs.id;
        Issue.getList(projectId);
    },
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
                    i18n.t('status')
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
                        i18n.t('status_value.' + issue.status)
                    ),
                    m('div', {
                            class: 'issue-priority'
                        },
                        m('span', {
                                class: 'priority ' + Constants.Priority[issue.priority].toLowerCase()
                            },
                            i18n.t('priority.' + issue.priority)
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