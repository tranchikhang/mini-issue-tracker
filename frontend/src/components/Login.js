var m = require('mithril');

let UserNameInput = {
    error: '',
    value: '',
    validate: () => {
        UserNameInput.error = !UserNameInput.value ? 'Please enter user name' : '';
    },
    isValid: () => {
        return UserNameInput.error ? false : true;
    },
    view: () => {
        return [
            m('input', {
                className: UserNameInput.error ? 'error' : '',
                placeholder: 'User Name',
                value: UserNameInput.value,
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
    validate: () => {
        PasswordInput.error = !PasswordInput.value ? 'Please enter password' : '';
    },
    isValid: () => {
        return PasswordInput.error ? false : true;
    },
    view: () => {
        return [
            m('input', {
                className: PasswordInput.error ? 'error' : '',
                placeholder: 'Password',
                value: PasswordInput.value,
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
    isValid: () => {
        UserNameInput.validate();
        PasswordInput.validate();
        if (UserNameInput.isValid() && PasswordInput.isValid()) {
            return true;
        }
        return false;
    },
    view: () => {
        return m('form', [
            m('h1', {
                    class: 'has-background-link'
                },
                'Login'
            ),
            // Passing component
            m(UserNameInput),
            m(PasswordInput),
            m('button', {
                    class: 'button is-link',
                    id: 'loginBtn',
                    type: 'button',
                    onclick: () => {
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
    enterKey: '13',
    view: () => {
        return m('div', {
            class: 'hero is-fullheight'
        }, [
            m('div', {
                    class: 'container login',
                    onkeyup: (e) => {
                        if (e.keyCode == 13 && LoginForm.isValid()) {
                            m.route.set('/dashboard')
                        }
                    }
                },
                m(LoginForm)
            )
        ]);
    }
}