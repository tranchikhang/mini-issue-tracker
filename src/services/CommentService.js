var CommentService = {
    getByIssueId: function(issueId) {
        return [{
            "id": 1,
            "user": "John Doe",
            "datetime": "2024-09-25T16:00:00Z",
            "text": "I've noticed the API times out when fetching orders with over 100 items. Has anyone else experienced this?"
        }, {
            "id": 2,
            "user": "Jane Smith",
            "datetime": "2024-09-25T16:10:00Z",
            "text": "Yes, I’ve run into the same issue. It seems to struggle with large datasets, especially when retrieving multiple orders at once."
        }, {
            "id": 3,
            "user": "Michael Johnson",
            "datetime": "2024-09-25T16:20:00Z",
            "text": "Same here. I tried fetching an order with 150 items, and the API timed out after 30 seconds. Maybe we need to increase the timeout limit?"
        }, {
            "id": 4,
            "user": "Emily Davis",
            "datetime": "2024-09-25T16:30:00Z",
            "text": "It’s not just about the timeout limit. I think there’s a performance issue when handling large order sizes. Optimizing the queries might help."
        }, {
            "id": 5,
            "user": "Robert Brown",
            "datetime": "2024-09-25T16:40:00Z",
            "text": "Good point, Emily. The API should be able to handle larger requests without timing out. Has anyone tried testing with smaller datasets?"
        }, {
            "id": 6,
            "user": "Sophia Wilson",
            "datetime": "2024-09-25T16:50:00Z",
            "text": "I’ve tested with smaller orders (around 50 items), and it worked fine. The issue really starts to appear with orders larger than 100 items."
        }, {
            "id": 7,
            "user": "David Lee",
            "datetime": "2024-09-25T17:00:00Z",
            "text": "So it looks like the issue is related to the size of the orders. We should probably prioritize optimizing the API to handle larger requests more efficiently."
        }]

    },
}

module.exports = CommentService