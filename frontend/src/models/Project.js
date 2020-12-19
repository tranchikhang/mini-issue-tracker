var ProjectService = require('../services/ProjectService');

var Project = {
    list: [],
    getList: function() {
        Project.list = ProjectService.getAll();
    },
}

module.exports = Project