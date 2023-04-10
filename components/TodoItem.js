import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <li className='todoapp-item'>
      <input className='todoapp-checkbox'
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      {todo.title}
      <button className='destroy' onClick={() => deleteTodo(todo.id)}></button>
    </li>
  );
};

export default TodoItem;