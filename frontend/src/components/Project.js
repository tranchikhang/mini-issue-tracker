var m = require('mithril');

var IssueList = require('./IssueList.js');

module.exports = {
    view: function() {
        return m(IssueList)
    }
}