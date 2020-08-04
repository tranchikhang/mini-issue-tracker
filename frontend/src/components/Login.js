var m = require('mithril');

// This is a MithrilJs component
const UserNameInput = {
    view() {
        return [
            m('input', {
                className: this.error ? 'error' : '',
                oninput() {
                    console.log(this.value)
                },
                error: '',
                placeholder: 'User Name',
                type: 'text',
                formcontrolname: 'user',
                validate() {
                    console.log(this)
                    this.error = this.value.length == 0 ? 'Please input user name' : '';
                }
            })
            // m('p.errorMessage', error)
        ];
    }
};

function LoginForm() {
    return m('form', [
        m('h1',
            'Login'
        ),
        // passing compnent
        m(UserNameInput),
        m('input', {
            placeholder: 'Password',
            type: 'password',
            formcontrolname: 'password'
        }),
        m('button', {
                class: 'pure-button pure-button-primary',
                id: 'loginBtn',
                type: 'button',
                onclick() {
                    m.route.set('/dashboard')
                }
            },
            'Login'
        )
    ])
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
                LoginForm()
            ),
            m('div', {
                class: 'pure-u-2-5'
            }, )
        ]);
    }
}