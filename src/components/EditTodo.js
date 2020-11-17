import React, { useState, useCallback } from "react";
import { MdModeEdit } from "react-icons/md";
import "./EditTodo.scss";

const EditTodo = ({ editContent }) => {
  const [editedOne, setEditedOne] = useState("");
  const onChange = (e) => {
    setEditedOne({ [e.target.key]: e.target.value });
  };
  const onClick = useCallback(() => {
    editContent(editedOne); // ToDo 컴포넌트에 수정내용 반영
    setEditedOne(""); // 입력폼 초기화
  }, [editContent, editedOne]);
  return (
    <>
      <form className="edit-todo">
        <input
          className="editedOne"
          placeholder="수정할 글을 써주세요"
          name="content"
          value={editedOne}
          onChange={onChange}
        />
      </form>
      <button onClick={onClick}>
        <MdModeEdit />
      </button>
      <div>{editedOne.err !== "" ? editedOne.err : null}</div>
    </>
  );
};
export default EditTodo;
