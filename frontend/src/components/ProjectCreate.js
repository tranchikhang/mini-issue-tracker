var m = require('mithril');

var Constants = require('../resources/Constants.js');

module.exports = {
    view: function() {
        return m('div', {
                class: 'project-create'
            },
            m('form', {
                class: ''
            }, [
                m('div',
                    'Create new project'
                ),
                m('div', {
                    class: 'columns is-multiline'
                }, [
                    m('div', {
                        class: 'field is-horizontal column is-half'
                    }, [
                        m('label', {
                                class: 'field-label',
                                for: 'code'
                            },
                            'Code'
                        ),
                        m('div', {
                            class: 'control field-body'
                        }, m('input', {
                            class: 'input',
                            type: 'text',
                            id: 'code'
                        }))
                    ]),
                    m('div', {
                        class: 'field is-horizontal column is-half'
                    }, [
                        m('label', {
                                class: 'field-label',
                                for: 'name'
                            },
                            'Name'
                        ),
                        m('div', {
                            class: 'control field-body'
                        }, m('input', {
                            class: 'input',
                            type: 'text',
                            id: 'name'
                        }))
                    ]),
                    m('div', {
                        class: 'field is-horizontal column is-half'
                    }, [
                        m('label', {
                                class: 'field-label',
                                for: 'client'
                            },
                            'Client'
                        ),
                        m('div', {
                            class: 'control field-body'
                        }, m('input', {
                            class: 'input',
                            type: 'email',
                            id: 'client',
                            required: 'required'
                        }))
                    ]),
                    m('div', {
                        class: 'field is-horizontal column is-half'
                    }, [
                        m('label', {
                                class: 'field-label',
                                for: 'manager'
                            },
                            'Manager'
                        ),
                        m('div', {
                            class: 'control field-body'
                        }, m('input', {
                            class: 'input',
                            type: 'text',
                            id: 'manager'
                        }))
                    ]),
                    m('div', {
                        class: 'field is-horizontal column is-half'
                    }, [
                        m('label', {
                                class: 'field-label',
                                for: 'status'
                            },
                            'Status'
                        ),
                        m('div', {
                            class: 'control field-body'
                        }, m('select', {
                            class: 'select',
                            id: 'status'
                        }, [
                            Object.keys(Constants.IssueStatus).map(key => m('option',
                                Constants.IssueStatus[key]
                            ))
                        ]))
                    ])
                ]),
                m('div', {
                    class: 'column',
                    align: 'right'
                }, m('button', {
                        class: 'button is-success',
                        type: 'submit'
                    },
                    'Save'
                ))
            ])
        )
    }
}