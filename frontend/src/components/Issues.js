var m = require('mithril');

var Issue = require('../models/Issue');

module.exports = {
    oninit: Issue.getList,
    view: function() {
    }
}