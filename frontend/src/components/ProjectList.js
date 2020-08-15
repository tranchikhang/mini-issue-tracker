var m = require('mithril');

var Project = require('../models/Project');

module.exports = {
    oninit: Project.getList,
    view: function() {
        return m('div', {
            'class': 'project-list'
        }, [
            m('div', {
                'class': 'project header'
            }, [
                m('div', {
                        'class': 'project-code'
                    },
                    ' Project Code '
                ),
                m('div', {
                        'class': 'project-name'
                    },
                    ' Project Name '
                ),
                m('div', {
                        'class': 'project-client'
                    },
                    ' Client '
                ),
                m('div', {
                        'class': 'project-manager'
                    },
                    ' Manager '
                ),
                m('div', {
                        'class': 'project-status'
                    },
                    ' Status '
                )
            ]),
            Project.list.map(function(project) {
                return m('div', {
                    'class': 'project project-' + project.color,
                    onclick() {
                        m.route.set('/project/1');
                    }
                }, [
                    m('div', {
                            'class': 'project-code'
                        },
                        project.code
                    ),
                    m('div', {
                            'class': 'project-name'
                        },
                        project.name
                    ),
                    m('div', {
                            'class': 'project-client'
                        },
                        project.client
                    ),
                    m('div', {
                            'class': 'project-manager'
                        },
                        project.manager
                    ),
                    m('div', {
                            'class': 'project-status'
                        },
                        project.status
                    )
                ])
            })
        ])
    }
}