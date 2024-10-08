var IssueService = {
    getAll: function() {
        return [{
            "id": 1,
            "status": 2,
            "type": 1,
            "summary": "App crashes on launch",
            "assignee": "Emily Zhang",
            "reporter": "John Doe",
            "due": "2024-09-15T14:00:00Z",
            "created": "2024-09-01T09:30:00Z",
            "modified": "2024-09-03T11:20:00Z",
            "priority": 4,
            "description": "The mobile application crashes immediately after launching. This issue has been reported by multiple users and is critical as it prevents them from accessing the app's features."
        }, {
            "id": 2,
            "status": 1,
            "type": 3,
            "summary": "Incorrect item in cart after order modification",
            "assignee": "Liam Johnson",
            "reporter": "Alice Smith",
            "due": "2024-09-20T18:00:00Z",
            "created": "2024-09-02T10:15:00Z",
            "modified": "2024-09-04T12:40:00Z",
            "priority": 3,
            "description": "When a user modifies an order by removing an item, the cart still shows the removed item. This leads to confusion and potential issues with billing."
        }, {
            "id": 3,
            "status": 3,
            "type": 2,
            "summary": "Slow response time on order submission",
            "assignee": "Sophia Davis",
            "reporter": "Michael Brown",
            "due": "2024-09-25T16:00:00Z",
            "created": "2024-09-03T08:00:00Z",
            "modified": "2024-09-05T14:00:00Z",
            "priority": 2,
            "description": "The API takes too long to respond when submitting an order, causing delays that lead to a poor user experience. This issue needs to be addressed to improve the performance."
        }, {
            "id": 4,
            "status": 4,
            "type": 1,
            "summary": "Payment gateway integration issue",
            "assignee": "Olivia Martinez",
            "reporter": "David Williams",
            "due": "2024-09-18T12:00:00Z",
            "created": "2024-09-04T13:25:00Z",
            "modified": "2024-09-06T15:30:00Z",
            "priority": 4,
            "description": "The integration with the payment gateway is failing intermittently. Transactions are not being processed, which affects the ability to complete orders."
        }, {
            "id": 5,
            "status": 2,
            "type": 2,
            "summary": "Missing translations for non-English languages",
            "assignee": "Isabella Garcia",
            "reporter": "Sophia Davis",
            "due": "2024-09-22T09:00:00Z",
            "created": "2024-09-05T14:45:00Z",
            "modified": "2024-09-07T16:10:00Z",
            "priority": 1,
            "description": "Some of the UI elements do not have translations for non-English languages, causing confusion for users who are not proficient in English. This needs to be fixed to ensure proper localization."
        }, {
            "id": 6,
            "status": 1,
            "type": 3,
            "summary": "Order confirmation email missing item details",
            "assignee": "Mason Lee",
            "reporter": "Olivia Martinez",
            "due": "2024-09-27T14:30:00Z",
            "created": "2024-09-06T07:50:00Z",
            "modified": "2024-09-08T11:35:00Z",
            "priority": 3,
            "description": "The order confirmation email sent to customers does not include itemized details of the order. This is a critical piece of information that should be included for transparency."
        }, {
            "id": 7,
            "status": 3,
            "type": 1,
            "summary": "API timeout when fetching large orders",
            "assignee": "Ava Perez",
            "reporter": "Emily Zhang",
            "due": "2024-09-30T17:15:00Z",
            "created": "2024-09-07T12:20:00Z",
            "modified": "2024-09-09T14:25:00Z",
            "priority": 4,
            "description": "The API times out when attempting to fetch large orders with many items. This issue prevents users from viewing their full order history and needs to be optimized."
        }, {
            "id": 8,
            "status": 2,
            "type": 2,
            "summary": "Push notifications not working on iOS",
            "assignee": "William Anderson",
            "reporter": "Liam Johnson",
            "due": "2024-10-02T08:45:00Z",
            "created": "2024-09-08T09:10:00Z",
            "modified": "2024-09-10T10:50:00Z",
            "priority": 2,
            "description": "Push notifications are not being delivered to users on iOS devices. This issue needs to be investigated to ensure that notifications are received as intended."
        }, {
            "id": 9,
            "status": 1,
            "type": 3,
            "summary": "UI layout issues on small screens",
            "assignee": "Sophia Davis",
            "reporter": "Ava Perez",
            "due": "2024-10-04T11:20:00Z",
            "created": "2024-09-09T08:30:00Z",
            "modified": "2024-09-11T13:00:00Z",
            "priority": 3,
            "description": "The UI layout is not responsive on smaller screens, causing elements to overlap or be cut off. This issue needs to be addressed to ensure a good user experience across all devices."
        }, {
            "id": 10,
            "status": 3,
            "type": 1,
            "summary": "Order history not loading for some users",
            "assignee": "Emily Zhang",
            "reporter": "Mason Lee",
            "due": "2024-10-06T10:35:00Z",
            "created": "2024-09-10T09:25:00Z",
            "modified": "2024-09-12T11:45:00Z",
            "priority": 4,
            "description": "Some users are reporting that their order history is not loading. This issue appears to be affecting a specific subset of users, and further investigation is needed to determine the cause."
        }, {
            "id": 11,
            "status": 2,
            "type": 3,
            "summary": "Incorrect total amount on the checkout page",
            "assignee": "Olivia Martinez",
            "reporter": "William Anderson",
            "due": "2024-10-08T13:10:00Z",
            "created": "2024-09-11T10:40:00Z",
            "modified": "2024-09-13T14:30:00Z",
            "priority": 4,
            "description": "The total amount displayed on the checkout page does not match the sum of the items in the cart. This discrepancy needs to be corrected to prevent billing errors."
        }, {
            "id": 12,
            "status": 3,
            "type": 2,
            "summary": "Unresponsive add to cart button",
            "assignee": "Liam Johnson",
            "reporter": "Isabella Garcia",
            "due": "2024-10-10T09:55:00Z",
            "created": "2024-09-12T11:15:00Z",
            "modified": "2024-09-14T13:20:00Z",
            "priority": 3,
            "description": "The add to cart button is sometimes unresponsive, requiring multiple clicks before an item is added to the cart. This issue needs to be resolved to improve the user experience."
        }, {
            "id": 13,
            "status": 2,
            "type": 1,
            "summary": "Session timeout after a short period of inactivity",
            "assignee": "Emily Zhang",
            "reporter": "Ava Perez",
            "due": "2024-10-12T12:45:00Z",
            "created": "2024-09-13T08:05:00Z",
            "modified": "2024-09-15T10:50:00Z",
            "priority": 2,
            "description": "Users are being logged out after a short period of inactivity, even when they are still browsing within the app. This issue leads to frustration and needs to be addressed."
        }, {
            "id": 14,
            "status": 1,
            "type": 3,
            "summary": "Image upload fails intermittently",
            "assignee": "William Anderson",
            "reporter": "John Doe",
            "due": "2024-10-14T15:30:00Z",
            "created": "2024-09-14T09:45:00Z",
            "modified": "2024-09-16T12:35:00Z",
            "priority": 3,
            "description": "The image upload feature fails intermittently, especially when the network connection is unstable. Users need to be able to upload images without facing these issues."
        }, {
            "id": 15,
            "status": 3,
            "type": 2,
            "summary": "Search functionality returns irrelevant results",
            "assignee": "Isabella Garcia",
            "reporter": "David Williams",
            "due": "2024-10-16T11:05:00Z",
            "created": "2024-09-15T10:50:00Z",
            "modified": "2024-09-17T13:15:00Z",
            "priority": 1,
            "description": "The search functionality is returning irrelevant results, making it difficult for users to find what they are looking for. This issue needs to be resolved to improve search accuracy."
        }]
    }
}
module.exports = IssueService