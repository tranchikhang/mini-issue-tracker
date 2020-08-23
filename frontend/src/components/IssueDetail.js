var m = require('mithril');

let IssueDetail = {
    isDisplayed: false,
    toggle: () => {
        IssueDetail.isDisplayed = !IssueDetail.isDisplayed;
    },
    show: () => {
        IssueDetail.isDisplayed = true;
    },
    view: () => {
        return m('div', {
            class: 'issue-detail column' + (IssueDetail.isDisplayed ? ' is-three-quarter' : '')
        }, [
            m('h1', {
                    class: 'title'
                },
                'CSS layout error in login page'
            ),
            m('div', {
                class: 'quick-action'
            }, [
                m('button', {
                    class: 'button'
                }, [
                    m('span', {
                            class: 'icon'
                        },
                        m('i', {
                            class: 'far fa-edit'
                        })),
                    m('span', 'Edit')
                ]),
                m('button', {
                    class: 'button'
                }, [
                    m('span', {
                            class: 'icon'
                        },
                        m('i', {
                            class: 'far fa-comment'
                        })),
                    m('span', 'Comment')
                ])
            ]),
            m('div', {
                class: 'detail'
            }, [
                m('h2', {
                        class: 'subtitle'
                    },
                    'Details'
                ),
                m('div', {
                    class: 'detail-content'
                }, [
                    m('div', {
                        class: 'detail-item columns'
                    }, [
                        m('strong', {
                                class: 'column is-half'
                            },
                            'Detail'),
                        m('span', {
                                class: 'column is-half'
                            },
                            'Value')
                    ]),
                    m('div', {
                        class: 'detail-item columns'
                    }, [
                        m('strong', {
                                class: 'column is-half'
                            },
                            'Detail'),
                        m('span', {
                                class: 'column is-half'
                            },
                            'Value')
                    ]),
                ])
            ]),
            m('div', {
                class: 'description'
            }, [
                m('h2', {
                        class: 'subtitle'
                    },
                    'Description'
                ),
                m('div', {
                        class: ''
                    },
                    'Smart Attachments add-on is compatible with GoEdit add-on.With the junction of these two add-ons, you can directly edit files and keep each revision under the same document. Note! While trying to edit an attachment with GoEdit add-on, you will be prompted to download the application for processing attachments.'
                )
            ])
        ])
    }
}

module.exports = IssueDetail