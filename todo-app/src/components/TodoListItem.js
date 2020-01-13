import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, deleteTodo }) => {
  const handleDelete = () => {
    const id = todo.id;
    deleteTodo(id);
  };
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">{todo.title}</div>
      </div>
      <div className="remove" onClick={handleDelete}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
