
export const daMeTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);

export const daMeTodo = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/todos/${id}`
  })
);

export const haceMeTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: `/api/todos/`,
    data: todo
  })
);

export const destruyeTodo = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/todos/${id}`
  })
);

export const updateTodo = (id) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todo/${id}`
  })
);
