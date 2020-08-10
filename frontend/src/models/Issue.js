var m = require('mithril')

var Constants = require('../resources/Constants.js');

var Issue = {
    list: [],
    getList: function() {
        Issue.list = [{
            "id": 1,
            "status": 1,
            "summary": "CSS layout error in login page",
            "pic": "Tyra Guthrie",
            "due": "2020/09/15",
            "modified": "2020/08/12 17:16",
            "priority": "High"
        }, {
            "id": 2,
            "status": 4,
            "summary": "Missing alert on iOS 11",
            "pic": "Divine Carey",
            "due": "2020/08/24",
            "modified": "2020/07/24 08:51",
            "priority": "Medium"
        }, {
            "id": 3,
            "status": 2,
            "summary": "Update profile throws error",
            "pic": "Nel Steadman",
            "due": "2020/08/03",
            "modified": "2020/08/14 12:09",
            "priority": "Urgent"
        }, {
            "id": 4,
            "status": 5,
            "summary": "API timeout",
            "pic": "Raya Davison",
            "due": "2020/08/04",
            "modified": "2020/08/11 10:45",
            "priority": "Low"
        }, {
            "id": 5,
            "status": 2,
            "summary": "Signin error",
            "pic": "Dan Maguire",
            "due": "2020/08/09",
            "modified": "2020/08/16 14:30",
            "priority": "High"
        }];
        Issue.list = Issue.list.map(obj => {
            obj.status = Constants.IssueStatus[obj.status];
            obj.statusClass = 'status ' + obj.status.toLowerCase();
            obj.priorityClass = 'priority ' + obj.priority.toLowerCase();
            return obj;
        });
    },
}

module.exports = Issue