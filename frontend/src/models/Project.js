var m = require("mithril")

var Project = {
    list: [],
    getList: function() {
        Project.list = [{
            "id": 1,
            "color": "red",
            "code": "RT",
            "name": "Ronstring",
            "client": "Mydeo",
            "manager": "Teodoro O'Cleary",
            "status": "Finished"
        }, {
            "id": 2,
            "color": "blue",
            "code": "LT",
            "name": "Lotstring",
            "client": "Skibox",
            "manager": "Melly Dumbellow",
            "status": "Ongoing"
        }, {
            "id": 3,
            "color": "green",
            "code": "TLD",
            "name": "Trippledex",
            "client": "Kare",
            "manager": "Fay Lutty",
            "status": "Ongoing"
        }, {
            "id": 4,
            "color": "orange",
            "code": "HTT",
            "name": "Hatity",
            "client": "Yakitri",
            "manager": "Caddric Gaddes",
            "status": "Ongoing"
        }, {
            "id": 5,
            "color": "indigo",
            "code": "SLB",
            "name": "Solarbreeze",
            "client": "Tagchat",
            "manager": "Rici Charette",
            "status": "Pending"
        }]
    },
}

module.exports = Project