import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkerizer from '../middleware/thunk.js';

const configureStore = function(){
  return createStore(rootReducer, applyMiddleware(thunkerizer));
};

export default configureStore;
