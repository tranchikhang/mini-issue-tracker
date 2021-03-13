var FeatureService = require('../services/FeatureService');

var Feature = {
    list: [],
    getList: function() {
        Feature.list = FeatureService.getAll();
    },
}

module.exports = Feature