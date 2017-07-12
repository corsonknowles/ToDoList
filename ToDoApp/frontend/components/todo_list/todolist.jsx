import React from 'react';
import ToDoForm from './todo_form';
import TodoListItem from './todo_list_item';



class ToDoList extends React.Component {
  componentDidMount () {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map( (el, i) => (
            <TodoListItem
              todo={el}
              key={i}
              destroyTodo={this.props.destroyTodo} />
          ))}
        </ul>

        <ToDoForm createTodo={this.props.createTodo} />
      </div>
    );
  }
}

export default ToDoList;
