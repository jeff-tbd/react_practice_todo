import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, deleteTodo }) => {
  const todoList = todos.map(todo => (
    <TodoListItem todo={todo} deleteTodo={deleteTodo} key={todo.id} />
  ));
  return <div className="TodoList">{todoList}</div>;
};

export default TodoList;
