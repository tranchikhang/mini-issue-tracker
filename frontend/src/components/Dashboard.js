var m = require('mithril');

var ProjectList = require('./ProjectList.js');
var ProjectCreate = require('./ProjectCreate.js');

module.exports = {
    view: function() {
        return [
            m('div', {
                class: 'dashboard-title columns'
            }, [
                m('div', {
                    class: 'title column'
                }, 'Project management'),
                m('div', {
                        class: 'column',
                        align: 'right'
                    }, !ProjectCreate.isDisplayed && m('button', {
                        class: 'button is-success',
                        onclick: () => {
                            ProjectCreate.toggle();
                        }
                    }, [
                        m('span', {
                                class: 'icon'
                            },
                            m('i', {
                                class: 'fas fa-plus'
                            })),
                        m('span', 'Add')
                    ])
                )
            ]),
            ProjectCreate.isDisplayed && m(ProjectCreate),
            m(ProjectList)
        ]
    }
}