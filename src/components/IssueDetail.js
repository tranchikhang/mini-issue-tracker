import m from 'mithril';

import IssueModel from '../models/IssueModel';
import CommentModel from '../models/CommentModel';
import Comment from './Comment';
import Helper from './common/Helper';
import i18n from '../components/common/i18n';

let IssueDetail = {
    currentIssue: null,
    oninit: function(vnode) {
        IssueModel.getList();
        IssueDetail.currentIssue = IssueModel.list.find(issue => issue.id == vnode.attrs.id);
    },
    view: () => {
        return m('div', {
            class: 'issue-detail'
        }, [
            m('button', {
                class: 'button'
            }, [
                m('span', {
                    class: 'icon is-small',
                    onclick: () => {
                        console.log(IssueDetail.vnode.attrs.id)
                    }
                }, [
                    m('i', {
                        class: 'fa fa-sharp fa-solid fa-arrow-left'
                    })
                ])
            ]),
            m('div', {
                class: 'block'
            }, [
                m('h1', {
                        class: 'title mt-5'
                    },
                    IssueDetail.currentIssue.summary
                ),
                m('p', IssueDetail.currentIssue.reporter)
            ]),
            m('div', {
                class: 'block'
            }),
            m('h2', {
                    class: 'subtitle mt-5'
                },
                i18n.t('detail')
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
                            i18n.t('type')),
                        m('span', {
                                class: IssueDetail.currentIssue.typeClass
                            },
                            i18n.t('issue.type.' + IssueDetail.currentIssue.type)
                        )
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey issue-status'
                            },
                            i18n.t('status')
                        ),
                        m('span', i18n.t('status_value.' + IssueDetail.currentIssue.status))
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            i18n.t('priority.label')),
                        m('span', {
                                class: IssueDetail.currentIssue.priorityClass
                            },
                            i18n.t('priority.' + IssueDetail.currentIssue.priority)
                        )
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            i18n.t('assignee')),
                        m('span', IssueDetail.currentIssue.assignee)
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
                            i18n.t('creted_date')),
                        m('span', Helper.convertDateTime(IssueDetail.currentIssue.created))
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            i18n.t('modified_date')),
                        m('span', Helper.convertDateTime(IssueDetail.currentIssue.modified))
                    ]),
                    m('div', {
                        class: 'attributes-item'
                    }, [
                        m('div', {
                                class: 'label has-text-grey'
                            },
                            i18n.t('due_date')),
                        m('span', Helper.convertDateTime(IssueDetail.currentIssue.due))
                    ])
                ])
            ]),
            m('h2', {
                    class: 'subtitle mt-5'
                },
                i18n.t('description')
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
                i18n.t('discussion')
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
                                    'class': 'textarea'
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
            ]),
            m(Comment, {
                'issueId': IssueDetail.currentIssue.id
            })
        ])
    }
}

export default IssueDetail;