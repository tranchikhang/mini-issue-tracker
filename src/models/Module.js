var ModuleService = require('../services/ModuleService');

var Module = {
    list: [],
    getList: function() {
        Module.list = ModuleService.getAll();
    },
}

module.exports = Module