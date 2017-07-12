import { REMOVE_TODO, RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo } from '../actions/todo_actions';
// import * as todos from '../actions/todo_actions';

const initialState = {
  // 1: {
  //   id: 1,
  //   title: "wash car",
  //   body: "with soap",
  //   done: false
  // },
  // 2: {
  //   id: 2,
  //   title: "wash dog",
  //   body: "with shampoo",
  //   done: true
  // },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( (el) => {
        newState[el.id] = el;
      });
      return newState;
    case RECEIVE_TODO:
      Object.assign(newState, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      console.log("Made a todosReducer request to REMOVE_TODO");
      Object.assign(newState, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
