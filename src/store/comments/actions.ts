import { IComment } from '../../interfaces';

const ActionTypes = {
  ADD_COMMENT: 'ADD_COMMENT',
};

function addComment(comment: IComment) {
  return {
    type: ActionTypes.ADD_COMMENT,
    comment,
  }
}

export {
  ActionTypes, addComment,
};

interface IActionAddComment {
  type: 'ADD_COMMENT';
  comment: IComment;
}

export type IAction = IActionAddComment;
