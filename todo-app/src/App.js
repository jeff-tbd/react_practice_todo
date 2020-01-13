import React, { Component, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      title: 'js공부',
      id: 0,
    },
    {
      title: 'react공부',
      id: 1,
    },
  ]);
  const [id, setId] = useState(2);

  const addTodo = e => {
    e.preventDefault();
    const newTodo = document.querySelector('.TodoInsert input').value;
    setTodos([...todos, { title: newTodo, id: id }]);
    setId(id + 1);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <TodoInsert addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </TodoTemplate>
  );
};

export default App;
