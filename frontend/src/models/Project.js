var m = require("mithril")

var Project = {
    list: [],
    getList: function() {
        Project.list = [{
            "id": 1,
            "color": 1,
            "code": "RT",
            "name": "Ronstring",
            "client": "Mydeo",
            "manager": "Teodoro O'Cleary",
            "status": "Finished"
        }, {
            "id": 2,
            "color": 3,
            "code": "LT",
            "name": "Lotstring",
            "client": "Skibox",
            "manager": "Melly Dumbellow",
            "status": "Ongoing"
        }, {
            "id": 3,
            "color": 5,
            "code": "TLD",
            "name": "Trippledex",
            "client": "Kare",
            "manager": "Fay Lutty",
            "status": "Ongoing"
        }, {
            "id": 4,
            "color": 7,
            "code": "HTT",
            "name": "Hatity",
            "client": "Yakitri",
            "manager": "Caddric Gaddes",
            "status": "Ongoing"
        }, {
            "id": 5,
            "color": 2,
            "code": "SLB",
            "name": "Solarbreeze",
            "client": "Tagchat",
            "manager": "Rici Charette",
            "status": "Pending"
        }]
    },
}

module.exports = Project