import { combineReducers, createStore } from 'redux';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
});

const store = createStore(rootReducer);

export default store;
