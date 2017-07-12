import React from 'react';


class TodoListItem extends React.Component {
  render() {
    const { todo, removeTodo } = this.props;
    return (
      <li>
        {todo.title}
        {todo.body}
        <button onClick={ () => this.props.destroyTodo(todo) } >Delete</button>
      </li>

    );
  }
}

export default TodoListItem;
