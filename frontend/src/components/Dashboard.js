var m = require('mithril');

var ProjectList = require('./ProjectList.js');

module.exports = {
    view: function() {
        return m(ProjectList)
    }
}