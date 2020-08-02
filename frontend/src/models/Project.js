var m = require("mithril")

var Project = {
    list: [],
    getList: function() {
        Project.list = [{
            "id": 1,
            "code": "RT",
            "name": "Ronstring",
            "client": "Mydeo",
            "manager": "Teodoro O'Cleary"
        }, {
            "id": 2,
            "code": "LT",
            "name": "Lotstring",
            "client": "Skibox",
            "manager": "Melly Dumbellow"
        }, {
            "id": 3,
            "code": "TLD",
            "name": "Trippledex",
            "client": "Kare",
            "manager": "Fay Lutty"
        }, {
            "id": 4,
            "code": "HTT",
            "name": "Hatity",
            "client": "Yakitri",
            "manager": "Caddric Gaddes"
        }, {
            "id": 5,
            "code": "SLB",
            "name": "Solarbreeze",
            "client": "Tagchat",
            "manager": "Rici Charette"
        }]
    },
}

module.exports = Project