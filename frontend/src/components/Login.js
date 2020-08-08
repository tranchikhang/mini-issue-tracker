var m = require('mithril');

// This is a MithrilJs component
let UserNameInput = {
    error: '',
    value: '',
    validate() {
        UserNameInput.error = !UserNameInput.value ? 'Please input user name' : '';
    },
    isValid() {
        return UserNameInput.error ? false : true;
    },
    view() {
        return [
            m('input', {
                className: UserNameInput.error ? 'error' : '',
                error: '',
                placeholder: 'User Name',
                type: 'text',
                oninput: e => {
                    UserNameInput.value = e.target.value;
                    UserNameInput.error && UserNameInput.validate()
                }
            }),
            m('div.error-message', UserNameInput.error)
        ];
    }
};

let PasswordInput = {
    error: '',
    value: '',
    validate() {
        PasswordInput.error = !PasswordInput.value ? 'Please input password' : '';
    },
    isValid() {
        return PasswordInput.error ? false : true;
    },
    view() {
        return [
            m('input', {
                className: PasswordInput.error ? 'error' : '',
                error: '',
                placeholder: 'Password',
                type: 'password',
                oninput: e => {
                    PasswordInput.value = e.target.value;
                    PasswordInput.error && PasswordInput.validate()
                }
            }),
            m('div.error-message', PasswordInput.error)
        ];
    }
};

let LoginForm = {
    isValid() {
        UserNameInput.validate();
        PasswordInput.validate();
        if (UserNameInput.isValid() && PasswordInput.isValid()) {
            return true;
        }
        return false;
    },
    view() {
        return m('form', [
            m('h1',
                'Login'
            ),
            // passing component
            m(UserNameInput),
            m(PasswordInput),
            m('button', {
                    class: 'pure-button pure-button-primary',
                    id: 'loginBtn',
                    type: 'button',
                    onclick() {
                        if (LoginForm.isValid()) {
                            m.route.set('/dashboard')
                        }
                    }
                },
                'Login'
            )
        ])
    }
}

module.exports = {
    view() {
        return m('div', {
            class: 'pure-g login'
        }, [
            m('div', {
                class: 'pure-u-2-5'
            }, ),
            m('div', {
                    class: 'pure-u-1-5'
                },
                m(LoginForm)
            ),
            m('div', {
                class: 'pure-u-2-5'
            }, )
        ]);
    }
}