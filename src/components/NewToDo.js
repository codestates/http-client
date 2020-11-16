import React, { useState, useCallback } from "react";
import axios from "axios";
import { MdAdd } from "react-icons/md";

import "./NewToDo.scss";

const NewToDo = ({ onInsert }) => {
  // 0. useState를 통한 새 일정({content, startDate}) 관리
  const [newTodo, setNewTodo] = useState({
    content: "",
    startDate: "",
    err: "",
  });

  // 1. 입력받은 내용을 새 일정(content)에 반영
  const onChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  // 2. 버튼 메소드(엔터키 허용)
  const onSubmit = useCallback(
    (e) => {
      if (newTodo.content.length === 0 || newTodo.startDate.length === 0) {
        setNewTodo({ err: "뭐라도 쓰십쇼" });
      } else {
        // ToDo 컴포넌트에 입력내용 반영
        onInsert(newTodo);

        // 입력폼 초기화
        setNewTodo({
          content: "",
          startDate: "",
        });
        e.preventDefault(); // submit 이벤트로 인한 새로고침 방지

        console.log(`
      ** 새 일정: ${newTodo.content}
      ** 시간: ${newTodo.startDate}
      `);
      }
    },
    [onInsert, newTodo]
  );

  // 3. 컴포넌트 렌더링
  return (
    <>
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
      <div>{newTodo.err !== "" ? newTodo.err : null}</div>
    </>
  );
};

export default NewToDo;
