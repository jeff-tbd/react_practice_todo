import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'js공부',
      checked: true,
    },
    {
      id: 1,
      text: 'react공부',
      checked: true,
    },
  ]);
  const nextId = useRef(2);

  const addTodo = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
      nextId.current += 1;
    },
    [todos],
  );

  const deleteTodo = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
      [todos],
    );
  });

  return (
    <TodoTemplate>
      <TodoInsert addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
