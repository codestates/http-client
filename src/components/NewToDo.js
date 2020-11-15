import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";

import "./NewToDo.scss";

const NewToDo = ({ onInsert }) => {
  // 0. useState를 통한 새 일정({content, startDate}) 관리
  const [newTodo, setNewTodo] = useState({
    content: "",
    startDate: "",
  });

  // 1. 입력받은 내용을 새 일정(content)에 반영
  const onChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  // 2. 버튼 메소드(엔터키 허용)
  const onSubmit = useCallback(
    (e) => {
      onInsert(newTodo);
      setNewTodo({
        content: "",
        startDate: "",
      }); // 초기화
      e.preventDefault(); // submit 이벤트로 인한 새로고침 방지

      console.log(`
      ** 새 일정: ${newTodo.content}
      ** 시간: ${newTodo.startDate}
      `);
    },
    [onInsert, newTodo]
  );

  // 3. 컴포넌트 렌더링
  return (
    <form className="new-todo" onSubmit={onSubmit}>
      <input
        className="startDate"
        placeholder="YYYY-MM-DD"
        // onChange 이벤트 입력을 위한 {name: value} 지정
        name="startDate"
        value={newTodo.startDate}
        onChange={onChange}
      />
      <input
        className="content"
        placeholder="할 일을 입력하시오"
        // onChange 이벤트 입력을 위한 {name: value} 지정
        name="content"
        value={newTodo.content}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default NewToDo;