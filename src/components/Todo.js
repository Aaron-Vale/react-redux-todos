import React from 'react'
import '../App.css'

const Todo = ({ onClick, onDelete, completed, text }) => (
  <div className="todo">
    <p
      onClick={onClick}
      style={ {
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? 'red' : 'white'
      }}
    >
      {text}
    </p>
    <button onClick ={onDelete}>X</button>
  </div>
)

export default Todo
