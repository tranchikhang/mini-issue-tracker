var m = require('mithril');

var Issue = require('../models/Issue');

module.exports = {
    oninit: Issue.getList,
    view: function() {
        return m('div', {
            'class': 'issue-list'
        }, [
            m('div', {
                'class': 'header'
            }, [
                m('div', {
                        'class': 'issue-id'
                    },
                    ' ID '
                ),
                m('div', {
                        'class': 'issue-status'
                    },
                    ' Status '
                ),
                m('div', {
                        'class': 'issue-priority'
                    },
                    ' Priority '
                ),
                m('div', {
                        'class': 'issue-summary'
                    },
                    ' Summary '
                ),
                m('div', {
                        'class': 'issue-pic'
                    },
                    ' Person in Charge '
                ),
                m('div', {
                        'class': 'issue-modified'
                    },
                    ' Modified '
                )
            ]),
            Issue.list.map(function(issue) {
                return m('div', {
                    'class': 'issue',
                    onclick() {
                        // m.route.set('/dashboard');
                    }
                }, [
                    m('div', {
                            'class': 'issue-id'
                        },
                        issue.id
                    ),
                    m('div', {
                            'class': 'issue-status'
                        },
                        issue.status
                    ),
                    m('div', {
                            'class': 'issue-priority'
                        },
                        issue.priority
                    ),
                    m('div', {
                            'class': 'issue-summary'
                        },
                        issue.summary
                    ),
                    m('div', {
                            'class': 'issue-pic'
                        },
                        issue.pic
                    ),
                    m('div', {
                            'class': 'issue-modified'
                        },
                        issue.modified
                    )
                ])
            })
        ])
    }
}