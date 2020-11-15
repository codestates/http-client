import React from "react";

// components
import List from "../components/List";

import "./Completed.css";

function Completed(props) {
  return (
    <>
      <section className="container-list">
        <div className="title-complete">&#9989; 완료일정</div>
        <div className="todo"></div>
      </section>
    </>
  );
}

export default Completed;
