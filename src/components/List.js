import React from "react";
import ListItem from "./ListItem";

import "./List.scss";

const List = ({ todos, onRemove, onToggleOfImportant, onToggleOfComplete }) => {
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <ListItem
          key={todo.listId}
          todo={todo}
          onRemove={onRemove}
          onToggleOfImportant={onToggleOfImportant}
          onToggleOfComplete={onToggleOfComplete}
        />
      ))}
    </div>
  );
};

// 컴포넌트의 props가 바뀌지 않았다면 re-rendering 방지(= shouldComponentUpdate와 동일)
export default React.memo(List);
