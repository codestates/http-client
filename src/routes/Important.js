import React from "react";

// components
import ListImportantFiltered from "../components/ListImportantFiltered";

const Important = (props) => {
  const filtered = props.todos.filter((todo) => todo.important === true);

  return (
    <>
      <section className="container-list">
        <div
          className="title-important"
          style={{ fontSize: `1.5rem`, fontWeight: `border` }}
        >
          &#127775; 중요일정
        </div>
        <div className="todo">
          {filtered.map((todo) => (
            <ListImportantFiltered key={todo.todoId} todo={todo} />
          ))}
        </div>
      </section>
    </>
  );
};

export default React.memo(Important);
