import { destruyeTodo, daMeTodos, daMeTodo, haceMeTodo } from '../util/todo_api_util';
// import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

//synchronous actions
export const receiveTodos = function (todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = function (todo) {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = function (todo) {
  return {
    type: REMOVE_TODO,
    todo
  };
};

//new asynchronous actions
export const fetchTodos = () => dispatch => (
  daMeTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const fetchTodo = (id) => dispatch => (
  daMeTodo(id).then(todo => dispatch(receiveTodo(todo)))
);

export const createTodo = (todo) => dispatch => (
  haceMeTodo(todo).then(newTodo => dispatch(receiveTodo(newTodo)))
);

export const destroyTodo = (todo) => dispatch => (
  destruyeTodo(todo.id).then(goneTodo => dispatch(removeTodo(goneTodo)))
);

// export function createTodo(todo) {
//   return (dispatch) => {
//     return haceMeTodo(todo)
//       .then(todo => dispatch(receiveTodo(todo)),
//             err => dispatch(receiveErrors(err.responseJSON)));
//   };
// }


window.fetchTodo = fetchTodo;
window.fetchTodos = fetchTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
