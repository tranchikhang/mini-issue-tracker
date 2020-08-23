var m = require('mithril');

var Constants = require('../resources/Constants.js');
var Project = require('../models/Project');

let CodeInput = {
    error: '',
    value: '',
    validate: () => {
        CodeInput.error = !CodeInput.value ? 'Please enter project code' : '';
    },
    isValid: () => {
        return CodeInput.error ? false : true;
    },
    view: () => {
        return m('div', {
                class: 'control field-body'
            },
            m('div', {
                class: 'field'
            }, [
                m('input', {
                    className: CodeInput.error ? 'input error' : 'input',
                    id: 'code',
                    placeholder: 'Code',
                    type: 'text',
                    value: CodeInput.value,
                    oninput: e => {
                        CodeInput.value = e.target.value;
                        CodeInput.error && CodeInput.validate()
                    }
                }),
                m('p', {
                    class: 'help is-danger'
                }, CodeInput.error)
            ])
        );
    }
};

let NameInput = {
    error: '',
    value: '',
    validate: () => {
        NameInput.error = !NameInput.value ? 'Please enter project name' : '';
    },
    isValid: () => {
        return NameInput.error ? false : true;
    },
    view: () => {
        return m('div', {
                class: 'control field-body'
            },
            m('div', {
                class: 'field'
            }, [
                m('input', {
                    className: NameInput.error ? 'input error' : 'input',
                    id: 'name',
                    placeholder: 'Name',
                    type: 'text',
                    value: NameInput.value,
                    oninput: e => {
                        NameInput.value = e.target.value;
                        NameInput.error && NameInput.validate()
                    }
                }),
                m('p', {
                    class: 'help is-danger'
                }, NameInput.error)
            ])
        );
    }
};

let ClientInput = {
    error: '',
    value: '',
    validate: () => {
        ClientInput.error = !ClientInput.value ? 'Please enter client name' : '';
    },
    isValid: () => {
        return ClientInput.error ? false : true;
    },
    view: () => {
        return m('div', {
                class: 'control field-body'
            },
            m('div', {
                class: 'field'
            }, [
                m('input', {
                    className: ClientInput.error ? 'input error' : 'input',
                    id: 'client',
                    placeholder: 'Client',
                    type: 'text',
                    value: ClientInput.value,
                    oninput: e => {
                        ClientInput.value = e.target.value;
                        ClientInput.error && ClientInput.validate()
                    }
                }),
                m('p', {
                    class: 'help is-danger'
                }, ClientInput.error)
            ])
        );
    }
};

let ManagerInput = {
    error: '',
    value: '',
    validate: () => {
        ManagerInput.error = !ManagerInput.value ? 'Please enter manager name' : '';
    },
    isValid: () => {
        return ManagerInput.error ? false : true;
    },
    view: () => {
        return m('div', {
                class: 'control field-body'
            },
            m('div', {
                class: 'field'
            }, [
                m('input', {
                    className: ManagerInput.error ? 'input error' : 'input',
                    id: 'manager',
                    placeholder: 'Manager',
                    type: 'text',
                    value: ManagerInput.value,
                    oninput: e => {
                        ManagerInput.value = e.target.value;
                        ManagerInput.error && ManagerInput.validate()
                    }
                }),
                m('p', {
                    class: 'help is-danger'
                }, ManagerInput.error)
            ])
        );
    }
};

let StatusSelect = {
    value: 0,
    view: () => {
        return m('select', {
            class: 'select',
            id: 'status',
            value: StatusSelect.value,
            onchange: e => {
                StatusSelect.value = e.target.value;
            }
        }, [
            Object.keys(Constants.IssueStatus).map(key => m('option', {
                    value: key
                }, Constants.IssueStatus[key]
            ))
        ]);
    }
}

let ColorSelect = {
    value: 1,
    view: () => {
        return m('select', {
            class: 'select',
            id: 'status',
            value: ColorSelect.value,
            onchange: e => {
                ColorSelect.value = e.target.value;
            }
        }, [
            Object.keys(Constants.ProjectColors).map(key => m('option', {
                style: 'background:' + Constants.ProjectColors[key],
                value: key
            }, Constants.ProjectColors[key]))
        ]);
    }
}

let ProjectCreateForm = {
    isValid: () => {
        CodeInput.validate();
        NameInput.validate();
        ClientInput.validate();
        ManagerInput.validate();
        if (CodeInput.isValid() && NameInput.isValid() && ClientInput.isValid() && ManagerInput.isValid()) {
            return true;
        }
        return false;
    },
    reset: () => {
        CodeInput.value = '';
        NameInput.value = '';
        ClientInput.value = '';
        ManagerInput.value = '';
        StatusSelect.value = 0;
        ColorSelect.value = 1;
    }
}

let ProjectCreate = {
    isDisplayed: false,
    toggle: () => {
        ProjectCreate.isDisplayed = !ProjectCreate.isDisplayed;
    },
    view: () => {
        return m('div', {
            class: 'project-create box px-6'
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
                    ProjectCreate.toggle();
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
                    ), m(CodeInput)
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
                    }, m(NameInput))
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
                    }, m(ClientInput))
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
                    }, m(ManagerInput))
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
                    }, m(StatusSelect))
                ]),
                m('div', {
                    class: 'field is-horizontal column is-half'
                }, [
                    m('label', {
                            class: 'field-label is-normal',
                            for: 'color'
                        },
                        'Color'
                    ),
                    m('div', {
                        class: 'control field-body'
                    }, m(ColorSelect))
                ])
            ]),
            m('div', {
                class: 'columns'
            }, m('div', {
                class: 'column',
                align: 'right'
            }, m('button', {
                class: 'button is-success',
                type: 'submit',
                onclick: () => {
                    if (ProjectCreateForm.isValid()) {
                        Project.list.push({
                            'id': Project.list.length + 1,
                            'color': ColorSelect.value,
                            'code': CodeInput.value,
                            'name': NameInput.value,
                            'client': ClientInput.value,
                            'manager': ManagerInput.value,
                            'status': StatusSelect.value
                        });
                        ProjectCreateForm.reset();
                    }
                }
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
    }
}

module.exports = ProjectCreate