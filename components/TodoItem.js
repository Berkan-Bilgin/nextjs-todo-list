import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <li className="todoitem">
    <input
      className="todoitem__checkbox"
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleCompleted(todo.id)}
    />
    <span className={`todoitem__text${todo.completed ? ' todoitem__text--completed' : ''}`}>
      {todo.title}
    </span>
    <button className="todoitem__delete" onClick={() => deleteTodo(todo.id)}></button>
  </li>
  );
};

export default TodoItem;