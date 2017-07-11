import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';

import configureStore from './store/store.js';
// import * as todosSelectors from './reducers/selectors';
import { allTodos, todo } from './reducers/selectors';
import rootReducer from './reducers/root_reducer';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store} />, document.getElementById('root') );

});


const store = configureStore();
window.store = store;
window.allTodos = allTodos;

// TODO:
// remove
// window.receiveTodos = receiveTodos;
// window.receiveTodo = receiveTodo;
// from todo_actions.js
