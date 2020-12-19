var IssueService = require('../services/IssueService');
var Constants = require('../resources/Constants.js');

var Issue = {
    list: [],
    getList: function() {
        Issue.list = IssueService.getAll();
        Issue.list = Issue.list.map(obj => {
            obj.status = Constants.IssueStatus[obj.status].replace(' ', '-');
            obj.statusClass = 'status ' + obj.status.toLowerCase();

            obj.type = Constants.IssueType[obj.type];
            obj.typeClass = 'type ' + obj.type.toLowerCase();

            obj.priority = Constants.IssuePriority[obj.priority];
            obj.priorityClass = 'priority ' + obj.priority.toLowerCase();
            return obj;
        });
    },
}

module.exports = Issue