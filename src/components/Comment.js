import m from 'mithril';

import CommentModel from '../models/CommentModel';
import Helper from './common/Helper';
import i18n from '../components/common/i18n';

let Comment = {
    issueId: null,
    oninit: function(vnode) {
        Comment.issueId = vnode.attrs.id;
        CommentModel.getByIssueId(Comment.issueId);
    },
    view: () => {
        return m('div', CommentModel.list.map(function(comment) {
            return m('article', {
                    class: 'media box'
                },
                [
                    m('div', {
                        class: 'media-content'
                    }, [
                        m('div', {
                            class: 'content'
                        }, [
                            m('p', [
                                m('strong', comment.user),
                                m('small', ' ', comment.timestamp),
                                m('hr'),
                                m('span', comment.text),
                                comment.codeSnippet ? m('pre', m('code', comment.codeSnippet)) : null
                            ])
                        ])
                    ])
                ]
            );
        }));
    }
};

export default Comment;