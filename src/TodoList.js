import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Tambah todo"
        value={todo}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>Tambah</button>
      <button onClick={() => setTodos([])}>Hapus Semua</button>
      <div style={{ justifyItems: "center" }}>
        <div style={{ textAlign: "left" }}>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleDeleteTodo(index)}>Hapus</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
