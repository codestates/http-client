import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link className="nav-todo" to={"/todo"}>
        홈
      </Link>
      <Link className="nav-mypage" to={"/mypage"}>
        마이페이지
      </Link>
      <Link className="nav-completed" to={"/completed"}>
        완료일정
      </Link>
      <Link className="nav-important" to={"/important"}>
        중요일정
      </Link>
    </div>
  );
}

export default Nav;
