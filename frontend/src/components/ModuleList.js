var m = require('mithril');

var Module = require('../models/Module');
var Feature = require('../models/Feature');

let ModuleList = {
    featureList: {},
    oninit: Module.getList,
    view: function() {
        return m('div', {
            'class': 'module-list'
        }, [
            m('div', {
                'class': 'columns module'
            }, [
                m('div', {
                        'class': 'column module-name'
                    },
                    'Module Name'
                ),
                m('div', {
                        'class': 'column is-5 module-status'
                    },
                    'Status'
                )
            ]),
            Module.list.map(function(module) {
                if (!ModuleList.featureList[module.id]) {
                    ModuleList.featureList[module.id] = [];
                }
                return [m('div', {
                        'class': 'columns module'
                    }, [
                        m('span', {
                                class: 'icon has-text-info'
                            },
                            m('i', {
                                class: 'fa fa-cubes'
                            })
                        ),
                        m('div', {
                            'class': 'column module-name'
                        }, m('a', {
                            onclick: () => {
                                if (ModuleList.featureList[module.id].length > 0) {
                                    ModuleList.featureList[module.id] = [];
                                } else {
                                    let features = Feature.getByModuleID(module.id);
                                    ModuleList.featureList[module.id] = Feature.getByModuleID(module.id);
                                }
                            }
                        }, module.name)),
                        m('div', {
                                'class': 'column is-5 module-status'
                            },
                            module.status
                        )
                    ]),
                    ModuleList.featureList[module.id].map(function(feature) {
                        return m('div', {
                            'class': 'feature columns'
                        }, [
                            m('div', {
                                class: 'column is-1'
                            }),
                            m('span', {
                                    class: 'icon has-text-success'
                                },
                                m('i', {
                                    class: 'fa fa-cogs'
                                })
                            ),
                            m('div', {
                                'class': 'column pl-5'
                            }, m('a', {
                                onclick: () => {
                                    m.route.set('/project/1/module/1');
                                }
                            }, feature.name)),
                            m('div', {
                                    'class': 'column is-5'
                                },
                                feature.status
                            )
                        ])
                    })
                ]
            })
        ])
    }
}

module.exports = ModuleList