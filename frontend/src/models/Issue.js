var m = require('mithril')

var Constants = require('../resources/Constants.js');

var Issue = {
    list: [],
    getList: function() {
        Issue.list = [{
            "id": 1,
            "status": 1,
            "type": 1,
            "summary": "CSS layout error in login page",
            "assignee": "Tyra Guthrie",
            "due": "2020/09/15",
            "created": "2020/04/02 17:16",
            "modified": "2020/08/12 17:16",
            "priority": 3
        }, {
            "id": 2,
            "status": 4,
            "type": 3,
            "summary": "Missing alert on iOS 11",
            "assignee": "Divine Carey",
            "due": "2020/08/24",
            "created": "2020/03/11 17:25",
            "modified": "2020/07/24 08:51",
            "priority": 2
        }, {
            "id": 3,
            "status": 2,
            "type": 2,
            "summary": "Update profile throws error",
            "assignee": "Nel Steadman",
            "due": "2020/08/03",
            "created": "2020/05/29 12:09",
            "modified": "2020/06/14 10:45",
            "priority": 4
        }, {
            "id": 4,
            "status": 5,
            "type": 1,
            "summary": "API timeout",
            "assignee": "Raya Davison",
            "due": "2020/08/04",
            "created": "2020/07/15 17:22",
            "modified": "2020/08/11 10:45",
            "priority": 1
        }, {
            "id": 5,
            "status": 2,
            "type": 3,
            "summary": "Signin error",
            "assignee": "Dan Maguire",
            "due": "2020/08/09",
            "created": "2020/08/14 13:11",
            "modified": "2020/08/16 14:30",
            "priority": 3
        }];
        Issue.list = Issue.list.map(obj => {
            obj.status = Constants.IssueStatus[obj.status];
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