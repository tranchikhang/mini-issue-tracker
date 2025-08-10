import m from 'mithril';
import ProjectList from './ProjectList.js';
import ProjectCreate from './ProjectCreate.js';

let Dashboard = {
    view: () => {
        return [
            m('div', {
                class: 'dashboard-title columns'
            }, [
                m('div', {
                    class: 'title column'
                }, 'Project management'),
                m('div', {
                        class: 'column',
                        align: 'right'
                    }, !ProjectCreate.isDisplayed && m('button', {
                        class: 'button is-success',
                        onclick: () => {
                            ProjectCreate.toggle();
                        }
                    }, [
                        m('span', {
                                class: 'icon'
                            },
                            m('i', {
                                class: 'fas fa-plus'
                            })),
                        m('span', 'Add')
                    ])
                )
            ]),
            ProjectCreate.isDisplayed && m(ProjectCreate),
            m(ProjectList)
        ]
    }
}

export default Dashboard;