import React from 'react';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  // Statik todo öğeleri
  const [todos, setTodos] = useState([
    { id: 1, title: 'İlk görev', completed: false },
    { id: 2, title: 'İkinci görev', completed: false },
    { id: 3, title: 'Üçüncü görev', completed: false },
  ]);
   // Yeni todo öğesi için state
  const [newTodo, setNewTodo] = useState('');

   // Yeni todo öğesini ekleme işlevi
  const addTodo = (event) => {
    event.preventDefault();
    const newId = todos.length + 1;
    const newTodos = [...todos, { id: newId, title: newTodo, completed: false }];
    setTodos(newTodos);
    setNewTodo('');
  };

   // Todo öğesini silmek için işlev
   const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Todo öğesini tamamlamak/tamamlanmamış olarak işaretlemek için işlev
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Head>
        <title>To Do Listesi</title>
      </Head>

      <main>
        <h1>To Do Listesi</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              {todo.title}
              <button onClick={() => deleteTodo(todo.id)}>Sil</button>
            </li>
          ))}
        </ul>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Yeni görev ekle"
          />
          <button type="submit">Ekle</button>
        </form>
      </main>
    </div>
  );
}
