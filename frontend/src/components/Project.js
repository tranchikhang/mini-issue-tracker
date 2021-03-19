var m = require('mithril');

var IssueList = require('./IssueList.js');
var ModuleList = require('./ModuleList.js');

module.exports = {
    view: function() {
        return m(ModuleList)
    }
}