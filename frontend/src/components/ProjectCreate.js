var m = require('mithril');

var Constants = require('../resources/Constants.js');
let ProjectCreate = {
    isDisplayed: false,
    toggle: function() {
        ProjectCreate.isDisplayed = !ProjectCreate.isDisplayed;
    },
    view: function() {
        return m('div', {
                class: 'project-create box'
            },
            m('form', {
                class: ''
            }, [
                m('div', {
                    class: 'columns'
                }, m('div', {
                    class: 'column',
                    align: 'right'
                }, m('button', {
                    class: 'button',
                    type: 'button',
                    onclick: () => {
                        ProjectCreate.isDisplayed = !ProjectCreate.isDisplayed;
                    }
                }, [
                    m('span', {
                            class: 'icon'
                        },
                        m('i', {
                            class: 'fas fa-times'
                        })),
                    m('span', 'Close')
                ]))),
                m('div', {
                    class: 'columns is-multiline'
                }, [
                    m('div', {
                        class: 'field is-horizontal column is-half'
                    }, [
                        m('label', {
                                class: 'field-label is-normal',
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
                                class: 'field-label is-normal',
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
                                class: 'field-label is-normal',
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
                                class: 'field-label is-normal',
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
                                class: 'field-label is-normal',
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
                    class: 'columns'
                }, m('div', {
                    class: 'column',
                    align: 'right'
                }, m('button', {
                    class: 'button is-success',
                    type: 'submit'
                }, [
                    m('span', {
                            class: 'icon'
                        },
                        m('i', {
                            class: 'fas fa-save'
                        })),
                    m('span', 'Save')
                ])))
            ])
        )
    }
}

module.exports = ProjectCreate