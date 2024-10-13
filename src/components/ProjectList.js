import m from 'mithril';

import ProjectModel from '../models/ProjectModel';
import i18n from '../components/common/i18n';
import {ProjectColors} from '../resources/Constants';

let ProjectList = {
    oninit: ProjectModel.getList,
    view: () => {
        return m('table', {
            'class': 'project-list table is-fullwidth'
        }, [
            m('thead', {
                'class': ''
            }, m('tr', {
                'class': ''
            }, [
                m('th', {
                        'class': 'project-code'
                    },
                    i18n.t('project.code')
                ),
                m('th', {
                        'class': 'project-name'
                    },
                    i18n.t('project.name')
                ),
                m('th', {
                        'class': 'project-client'
                    },
                    i18n.t('client')
                ),
                m('th', {
                        'class': 'project-manager'
                    },
                    i18n.t('manager')
                ),
                m('th', {
                        'class': 'project-status'
                    },
                    i18n.t('status')
                ),
                m('th', {
                        'class': 'project-action'
                    },
                    ''
                )
            ])),
            ProjectModel.list.map(function(project) {
                return m('tr', {
                    'class': 'project-' + ProjectColors[project.color].toLowerCase()
                }, [
                    m('td', {
                            'class': 'project-code'
                        },
                        project.code
                    ),
                    m('td', {
                        'class': 'project-name'
                    }, m('a', {
                        onclick: () => {
                            m.route.set('/project/1');
                        }
                    }, project.name)),
                    m('td', {
                            'class': 'project-client'
                        },
                        project.client
                    ),
                    m('td', {
                            'class': 'project-manager'
                        },
                        project.manager
                    ),
                    m('td', {
                            'class': 'project-status'
                        },
                        i18n.t('status_value' + '.' + project.status)
                    )
                ])
            })
        ])
    }
}

export default ProjectList;