var IssueService = {
    getAll: function() {
        return [{
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
            "status": 3,
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
        }, {
            "id": 6,
            "status": 6,
            "type": 3,
            "summary": "Edit Attachments Directly",
            "assignee": "Ramon Yurtsev",
            "due": "2020/11/02",
            "created": "2020/10/13 10:33",
            "modified": "2020/11/01 14:27",
            "priority": 2
        }, {
            "id": 7,
            "status": 3,
            "type": 3,
            "summary": "Install Fourth Row Components",
            "assignee": "Grove Hamblen",
            "due": "2020/12/11",
            "created": "2020/11/29 11:08",
            "modified": "2020/11/30 15:41",
            "priority": 2
        }]
    },
}

module.exports = IssueService