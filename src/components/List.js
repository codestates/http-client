import React from "react";
import ListItem from "./ListItem";
import "./List.scss";

const List = ({
  todoList,
  onRemove,
  onToggleOfImportant,
  onToggleOfComplete,
  onToggleOfEdit,
}) => {
  return (
    <div className="todolist">
      {todoList.map((todo) => (
        <ListItem
          key={todo.todoId}
          todo={todo} // todo = { userId, todoId, content, startDate, important, complete } << ListItem.js
          onRemove={onRemove}
          onToggleOfImportant={onToggleOfImportant}
          onToggleOfComplete={onToggleOfComplete}
          onToggleOfEdit={onToggleOfEdit}
        />
      ))}
    </div>
  );
};
// 컴포넌트의 props가 바뀌지 않았다면 re-rendering 방지(= shouldComponentUpdate와 동일)
export default React.memo(List);
