import React from "react";
import Head from "next/head";
import { useState } from "react";
import TodoItem from "@/components/TodoItem";
import TodoInput from "@/components/TodoInput";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  // Statik todo öğeleri
  const [todos, setTodos] = useState([
    { id: 1, title: "İlk görev", completed: true },
    { id: 2, title: "İkinci görev", completed: false },
    { id: 3, title: "Üçüncü görev", completed: false },
  ]);
  // Yeni todo öğesi için state
  const [newTodo, setNewTodo] = useState("");

  // Filtreleme için state
  const [filter, setFilter] = useState("all");

  // Filtrelenmiş todo ögelerini döndüren işlev
  const filteredTodos = () => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    } else if (filter === "incomplete") {
      return todos.filter((todo) => !todo.completed);
    } else {
      return todos;
    }
  };
  // Yeni todo öğesini ekleme işlevi
  const addTodo = (newTodo) => {
    const newId = uuidv4(); //Benzersiz bir id oluşturmak için
    const newTodos = [
      ...todos,
      { id: newId, title: newTodo, completed: false },
    ];
    setTodos(newTodos);
    setNewTodo("");
    console.log(todos);
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

  //Tamamlanan todo sayısını döndüren işlev
  const completedTodosCount = () => {
    return todos.filter((todo) => todo.completed).length;
  };

  //Tamamlanmamış todo sayısını döndüren işlev
  const incompleteTodosCount = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  //Tamamlanmış todo öğelerini silmek için işlev
  const deleteCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  //Tüm todo öğelerini silmek için işlev
  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <Head>
        <title>To Do Listesi</title>
      </Head>

      <main className="todoapp">
  <h1 className="todoapp-title">todos</h1>

  <div className="todoapp-card">
    <TodoInput addTodo={addTodo} />
    <ul>
      {filteredTodos().map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>

    <div>
      <button className="todoapp-card__button" onClick={() => setFilter("all")}>
        Tümü ({todos.length})
      </button>
      <button className="todoapp-card__button" onClick={() => setFilter("completed")}>
        Tamamlananlar ({completedTodosCount()})
      </button>
      <button className="todoapp-card__button" onClick={() => setFilter("incomplete")}>
        Tamamlanmamışlar ({incompleteTodosCount()})
      </button>
      <button className="todoapp-card__button" onClick={deleteCompletedTodos}>
        Tamamlanmışları sil
      </button>
      <button className="todoapp-card__button" onClick={deleteAllTodos}>
        Tümünü sil
      </button>
    </div>
  </div>
</main>
    </div>
  );
}
