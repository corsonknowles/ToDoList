import React from 'react';
import ToDoForm from './todo_form';
import TodoListItem from './todo_list_item';

class ToDoList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.todos.map( (el, i) => (
            <TodoListItem
              todo={el}
              key={i}
              removeTodo={this.props.removeTodo} />
          ))}
        </ul>

        <ToDoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
}

export default ToDoList;
