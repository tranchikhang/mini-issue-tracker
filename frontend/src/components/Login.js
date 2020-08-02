var m = require('mithril');

module.exports = {
    view: function() {
        return m('div', {
            class: 'pure-g login'
        }, [
            m('div', {
                class: 'pure-u-2-5'
            }, ),
            m('div', {
                    class: 'pure-u-1-5'
                },
                m('form', [
                    m('h1',
                        'Login'
                    ),
                    m('input', {
                        placeholder: 'Username',
                        type: 'text',
                        formcontrolname: 'user'
                    }),
                    m('input', {
                        placeholder: 'Password',
                        type: 'password',
                        formcontrolname: 'password'
                    }),
                    m('button', {
                            class: 'pure-button pure-button-primary',
                            id: 'loginBtn',
                            type: 'button',
                            onclick: function() {
                                m.route.set('/dashboard')
                            }
                        },
                        'Login'
                    )
                ])
            ),
            m('div', {
                class: 'pure-u-2-5'
            }, )
        ]);
    }
}