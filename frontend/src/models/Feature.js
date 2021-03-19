var FeatureService = require('../services/FeatureService');

var Feature = {
    getByModuleID: function(moduleId) {
        return FeatureService.getAll().filter(feature => feature.module_id == moduleId);
    }
}

module.exports = Feature