import { connect } from 'react-redux';

import ToDoList from './todolist';

import { allTodos } from '../../reducers/selectors';
import { destroyTodo, createTodo, fetchTodos, receiveTodo, removeTodo } from '../../actions/todo_actions';


const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  // removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  destroyTodo: (todo) => dispatch(destroyTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
