var m = require('mithril');

// Input component
class Input = {
    constructor(vnode) {
        this.error = '';
    }
    view() {
        return [
            m('input', {
                className: this.error ? 'error' : '',
                oninput() {
                    console.log(this)
                },
                error: '',
                placeholder: 'User Name',
                type: 'text',
                formcontrolname: 'user',
                validate() {
                    this.error = this.value.length == 0 ? 'Please input user name' : '';
                }
            }),
            m('p.error-message', this.error)
        ];
    }
};