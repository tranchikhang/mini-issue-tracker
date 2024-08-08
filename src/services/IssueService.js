var IssueService = {
    getAll: function() {
        return [{
            "id": 1,
            "status": 1,
            "type": 1,
            "summary": "onmatch should be lifecycle method",
            "assignee": "Tyra Guthrie",
            "due": "2020/09/15",
            "created": "2020/04/02 17:16",
            "modified": "2020/08/12 17:16",
            "priority": 3,
            "description": "Currently onmatch only works on a top level routed component. This is not ideal as there are potential cases for a route match needing component level hook. Currently there is no good way for me to know in a component when a route parameter has changed within a route.\r\n\r\nMake onmatch happen in every component. Decouple it from render so it works more like oninit or oncreate. I do like that it provides the param in the passed arg before the m.route.param changes.\r\n\r\nI realize that onmatch is a kind of conceived of as different kind of component called a \"resolver\" and that there are potentially good structural reason for this. Specifically deferring render with a promise and returning a component to be rendered might be something that we want only be happening at the root component level.\r\n\r\nHowever I think that onmatch could be simpler and more effective as a more basic lifecycle method - I can handle my own loader components within a component that render while I'm waiting for data to load, and I can switch routes or render different components within my model logic, however I can't figure out when a route change has provided me a new m.route.param() value from my subcomponents without hooking into component data higher up. That's an anti-pattern to me."
        }, {
            "id": 2,
            "status": 4,
            "type": 3,
            "summary": "Add hook to router",
            "assignee": "Divine Carey",
            "due": "2020/08/24",
            "created": "2016/06/11 17:25",
            "modified": "2020/07/24 08:51",
            "priority": 2,
            "description": "I love the simplicity of the current router, but I would like to expose a hook that runs after a route has been resolved but before the associated component has been rendered. The feature would be useful for implementing a few common patterns:\r\n\r\n routes to a landing page if the user is logged out, but /dashboard if the user is logged in /dashboard routes to a dashboard if user is logged in, but /login if user is logged out\r\n\r\nThere is lots of precedent for this type of hook in other routers. See, for example, onenter in react-router and the ability to extend router.execute in Backbone. \r\n\r\nAdd an onroute hook to components that runs before the component is rendered and has the option to redirect to another route without rendering the component?\r\n\r\nAlternatively, if oninit returns false, prevent rendering of the component?"
        }, {
            "id": 3,
            "status": 3,
            "type": 2,
            "summary": "Optimizing mounting to a serverside rendered HTML tree (DOM hydration)",
            "assignee": "Nel Steadman",
            "due": "2020/08/03",
            "created": "2020/05/29 12:09",
            "modified": "2020/06/14 10:45",
            "priority": 4,
            "description": "Right now Mithril recalculates the VDOM while mounting over a server-side rendered HTML. Can it be optimized?\r\n\r\nI also looked into it some in 0.2.x, and it's non-trivial to do in general. You literally have to build the initial tree differently, and it will inevitably run into complications with m.trust. You also have the secondary concern of whether the tree is even correct compared to the vnodes."
        }, {
            "id": 4,
            "status": 5,
            "type": 1,
            "summary": "Error handling in view",
            "assignee": "Raya Davison",
            "due": "2020/08/04",
            "created": "2020/07/15 17:22",
            "modified": "2020/08/11 10:45",
            "priority": 1,
            "description": "It seems like Mithril does not handle errors thrown in the view function.\r\n\r\nMy personal experience is that if an error is thrown inside the view, the UI does not get properly updated. Not only the component fails to be updated, but the entire app as well.\r\n\r\nMithril could catch the error and render an empty string where the component should be (and log the error). Maybe an errorView method could be supported (if defined).\r\n\r\nIt is all too easy to get an error in a component. For example if part of a data path is undefined, as loaded from AJAX. I think keeping the rest of the UI up to date would result in a more robust application. One that I as a developer can trust will work in the wild.\r\n\r\nI know I can work around this, and I do. But I think Mithril could do better, and be more friendly to devs."
        }, {
            "id": 5,
            "status": 2,
            "type": 3,
            "summary": "Docs/simple app: experience could be better",
            "assignee": "Dan Maguire",
            "due": "2020/08/09",
            "created": "2017/03/14 13:11",
            "modified": "2020/08/16 14:30",
            "priority": 3,
            "description": "IMHO the simple app is an excellent introduction to mithril; however it falls down in some critical places for the uninitiated:\r\n\r\nSaves to the free heroku service don't always work, which could lead a noob to think — quite reasonably — that the framework itself is failing. Or that they've failed to duplicate the code properly. There is nothing that alerts the dev that saves aren't really happening. If the tutorial is intended to be the newcomer's first real experience with mithril, I would contend that this breakage in functionality is crippling to the framework's potential reach. The tutorial must be airtight.\r\n\r\nThe code as it stands never updates the local cache. This is, in my experience, one of the great potential pitfalls for noobs.\r\n\r\nWhen we navigate to UserForm, we retrieve the User from the webservice, and not from our local cache. This enables the scenario of navigating directly to the UserForm without first viewing the list, but it means we're editing a separate object rather than the one which may already exist in our local cache (User.list).\r\n\r\nThe entire list is retrieved every time we navigate to UserList."
        }, {
            "id": 6,
            "status": 1,
            "type": 3,
            "summary": "m.route.set drops query strings with same key but different values",
            "assignee": "Ramon Yurtsev",
            "due": "2020/11/02",
            "created": "2020/10/13 10:33",
            "modified": "2020/11/01 14:27",
            "priority": 2,
            "description": "m.route.set(/foo?bar=a&bar=b) should change the route to /foo?bar=a&bar=b\r\n\r\nThe route changes to /foo?bar=a, dropping the second query string value for the repeated key.\r\n\r\nI have a page with a table and filters. Clicking filters adds to the query string and changes the route. The onmatch function grabs the url, uses the query string to make an xhr request, and feeds the results to a stream which updates the table. In this case, I might have /foos?state=co&state=ny to filter my table to show foos for Colorado & New York.\r\n\r\nAs a workaround, instead of using m.route.set, I'm setting window.location. This causes page refreshes and loses the awesomeness of mirthil's routing and rendering engine."
        }, {
            "id": 7,
            "status": 3,
            "type": 3,
            "summary": "Mithril Community Blog - ideas and implementation details",
            "assignee": "Grove Hamblen",
            "due": "2020/12/11",
            "created": "2020/11/29 11:08",
            "modified": "2020/11/30 15:41",
            "priority": 2,
            "description": "In relatively recent gitter chatter an idea was floated to implement a community blog for Mithril, to serve as a way to present good practices, ideas, guides and related content in a less formal fashion than part of the official documentation. One motivation for maintaining a blog is that from user anecdotes it's been clear that Leo's original blog posts have been a driving force in gaining interest in Mithril.js in the first place, and perhaps a place to collect similar thoughts could serve a similar purpose and demonstrate the utility that this framework provides.\r\n\r\nThe reason to maintain a blog as a community initiative is to remove the maintenance and content generation burden from individual people, while allowing for a breadth of viewpoints and practices to be presented."
        }]
    },
}

module.exports = IssueService