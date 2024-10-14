import m from 'mithril';

import IssueModel from '../models/IssueModel';
import i18n from '../components/common/i18n';
import {Priority} from '../resources/Constants';


let IssueList = {
    projectId: null,
    oninit: function(vnode) {
        IssueList.projectId = vnode.attrs.id;
        IssueModel.getList(IssueList.projectId);
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
                    i18n.t('priority.label')
                ),
                m('div', {
                        class: 'issue-summary'
                    },
                    i18n.t('issue.title')
                ),
                m('div', {
                        class: 'issue-assignee'
                    },
                    i18n.t('assignee')
                ),
                m('div', {
                        class: 'issue-modified'
                    },
                    i18n.t('modified_date'),
                )
            ]),
            IssueModel.list.map(issue => {
                return m('div', {
                    class: 'issue'
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
                                class: 'priority ' + Priority[issue.priority].toLowerCase()
                            },
                            i18n.t('priority.' + issue.priority)
                        )
                    ),
                    m('div', {
                            class: 'issue-summary',
                            onclick: () => {
                                m.route.set('/project/1/issue/' + issue.id);
                            }
                        },
                        issue.summary
                    ),
                    m('div', {
                            class: 'issue-assignee'
                        },
                        issue.assignee
                    ),
                    m('div', {
                            class: 'issue-modified'
                        },
                        issue.modified
                    )
                ])
            })
        ]);
    }
}

export default IssueList;