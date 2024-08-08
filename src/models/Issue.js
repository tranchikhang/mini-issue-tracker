var IssueService = require('../services/IssueService');
var Constants = require('../resources/Constants.js');
var i18n = require('../components/common/i18n');

var Issue = {
    list: [],
    getList: function() {
        Issue.list = IssueService.getAll();
        Issue.list = Issue.list.map(obj => {
            // obj.statusClass = 'status ' + Constants.Status[obj.status].toLowerCase();

            // obj.typeClass = 'type ' + Constants.Priority[obj.priority].toLowerCase();

            obj.priorityClass = 'priority ' + Constants.Priority[obj.priority].toLowerCase();
            return obj;
        });
    },
}

module.exports = Issue