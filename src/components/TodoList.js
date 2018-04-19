import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <div className="todo-list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
    )}
  </div>
)

export default TodoList
