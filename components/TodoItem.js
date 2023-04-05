import React from 'react';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>Sil</button>
    </li>
  );
};

export default TodoItem;