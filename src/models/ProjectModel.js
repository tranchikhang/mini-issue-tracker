import ProjectService from '../services/ProjectService';

var ProjectModel = {
    list: [],
    getList: function() {
        ProjectModel.list = ProjectService.getAll();
    },
}

export default ProjectModel;