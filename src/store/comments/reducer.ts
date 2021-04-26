import { ActionTypes, IAction } from './actions';
import { IComment } from '../../interfaces';

const defaultState: IComment[] = [];

function reducer(state = defaultState, action: IAction) {
  let newState;
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      newState = [
        ...state,
        action.comment,
      ];
      break;
    default:
      newState = state;
  }
  return newState;
}

export default reducer;
