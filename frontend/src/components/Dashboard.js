var m = require('mithril');

var project = require('../models/Project');

module.exports = {
    oninit: project.getList,
    view: function() {
        console.log(project)
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
                )
            ]),
            project.list.map(function(project) {
                return m('div', {
                    'class': 'project'
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
                    )
                ])
            })
        ])
    }
}