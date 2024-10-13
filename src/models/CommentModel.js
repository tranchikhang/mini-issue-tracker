import CommentService from '../services/CommentService';

var CommentModel = {
    list: [],
    getByIssueId: function(issueId) {
        CommentModel.list = CommentService.getByIssueId(issueId);
    }
}

export default CommentModel;