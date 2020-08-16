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
                }, m('button', {
                        type: 'submit',
                        class: 'button is-primary'
                    },
                    'Add'
                ))
            ]),
            m(ProjectCreate),
            m(ProjectList)
        ]
    }
}