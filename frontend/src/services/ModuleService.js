var ModuleService = {
    getAll: function() {
        return [{
            "id": 1,
            "name": "Dashboard",
            "status": "Finished"
        }, {
            "id": 2,
            "name": "Authentication",
            "status": "Ongoing"
        }, {
            "id": 3,
            "name": "Data transfer",
            "status": "Ongoing"
        }, {
            "id": 4,
            "name": "Internal resources",
            "status": "Pending"
        }, {
            "id": 5,
            "name": "Background Process",
            "status": "Ongoing"
        }]
    },
}

module.exports = ModuleService