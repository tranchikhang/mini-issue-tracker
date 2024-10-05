import m from 'mithril';

import IssueList from './IssueList.js';

let Project = {
    view: function() {
        return m(IssueList)
    }
}

export default Project;