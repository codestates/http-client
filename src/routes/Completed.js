import React from "react";

// components
import ListCompleteFiltered from "../components/ListCompleteFiltered";

const Completed = (props) => {
  const filtered = props.todos.filter((todo) => todo.complete === true);

  return (
    <>
      <section className="container-list">
        <div
          className="title-complete"
          style={{ fontSize: `1.5rem`, fontWeight: `border` }}
        >
          &#9989; 완료일정
        </div>
        <div className="todo">
          {filtered.map((todo) => (
            <ListCompleteFiltered key={todo.todoId} todo={todo} />
          ))}
        </div>
      </section>
    </>
  );
};

export default React.memo(Completed);
