import IssueService from '../services/IssueService';
import Constants from '../resources/Constants.js';
import i18n from '../components/common/i18n';

var IssueModel = {
    list: [],
    getList: function(projectId) {
        IssueModel.list = IssueService.getAll();
    }
}

export default IssueModel;