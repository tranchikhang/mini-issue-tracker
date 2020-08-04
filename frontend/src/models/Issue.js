var m = require('mithril')

var Issue = {
    list: [],
    getList: function() {
        Issue.list = [{
            "id": 125,
            "status": 1,
            "summary": "CSS layout error in login page",
            "last-modified": "2019/08/12 17:16",
            "priority": "High"
        }, {
            "id": 152,
            "status": 1,
            "summary": "Missing alert on iOS 11",
            "last-modified": "2019/07/24 08:51",
            "priority": "Medium"
        }, {
            "id": 99,
            "status": 2,
            "summary": "Update profile throws error",
            "last-modified": "2019/08/14 12:09",
            "priority": "High"
        }, {
            "id": 102,
            "status": 2,
            "summary": "API timeout",
            "last-modified": "2019/08/11 10:45",
            "priority": "Low"
        }, {
            "id": 138,
            "status": 2,
            "summary": "Signin error",
            "last-modified": "2019/08/16 14:30",
            "priority": "High"
        }]
    },
}

module.exports = Issue