import React, { useState } from 'react';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import TodoForm from './TodoForm';

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), task: text, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const editTodo = (text, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: text, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Task to do.....</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTodo} task={todo} key={todo.id} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTask={editTask}
          />
        )
      )}
    </div>
  );
}
