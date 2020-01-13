import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ addTodo }) => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="button" onClick={addTodo}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
