var IssueService = require('../services/IssueService');
var Constants = require('../resources/Constants.js');
var i18n = require('../components/common/i18n');

var Issue = {
    list: [],
    getList: function(projectId) {
        Issue.list = IssueService.getAll();
    }
}

module.exports = Issue