var FeatureService = {
    getAll: function() {
        return [{
            "id": 1,
            "module_id": 1,
            "name": "Schedule management",
            "status": "Ongoing"
        }, {
            "id": 2,
            "module_id": 1,
            "name": "Setting",
            "status": "Ongoing"
        }, {
            "id": 3,
            "module_id": 2,
            "name": "Login",
            "status": "Finished"
        }, {
            "id": 4,
            "module_id": 2,
            "name": "Forget password",
            "status": "Finished"
        }, {
            "id": 5,
            "module_id": 3,
            "name": "Sync data",
            "status": "Finished"
        }, {
            "id": 6,
            "module_id": 4,
            "name": "File management",
            "status": "Finished"
        }, {
            "id": 7,
            "module_id": 5,
            "name": "Batch process",
            "status": "Finished"
        }, {
            "id": 8,
            "module_id": 5,
            "name": "Queue process",
            "status": "Finished"
        }]
    },
}

module.exports = FeatureService