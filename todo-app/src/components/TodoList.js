import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, deleteTodo, onToggle }) => {
  const todoList = todos.map(todo => (
    <TodoListItem
      todo={todo}
      deleteTodo={deleteTodo}
      key={todo.id}
      onToggle={onToggle}
    />
  ));
  return <div className="TodoList">{todoList}</div>;
};

export default TodoList;
