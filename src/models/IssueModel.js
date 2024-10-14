import IssueService from '../services/IssueService';
import Constants from '../resources/Constants.js';
import i18n from '../components/common/i18n';
import Helper from '../components/common/Helper';

var IssueModel = {
    list: [],
    getList: function(projectId) {
        IssueModel.list = IssueService.getAll();
        IssueModel.list.forEach((issue) => {
            issue.modified = Helper.convertDateTime(issue.modified)
        });
    }
}

export default IssueModel;