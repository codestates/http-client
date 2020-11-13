import React from "react";
import { Link } from "react-router-dom";

// components
import Welcome from "../components/Welcome";

// CSS
import "./Nav.css";

const NavLinkStyle = {
  textDecoration: `none`,
  color: `white`,
};

function Nav() {
  return (
    <ul className="nav">
      <div className="nav-welcome"></div>
      <li className="nav-todo">
        <Link to={"/todo"} style={NavLinkStyle}>
          홈
        </Link>
      </li>
      <li className="nav-mypage">
        <Link to={"/mypage"} style={NavLinkStyle}>
          마이페이지
        </Link>
      </li>
      <li className="nav-completed">
        <Link to={"/completed"} style={NavLinkStyle}>
          완료일정
        </Link>
      </li>
      <li className="nav-important">
        <Link to={"/important"} style={NavLinkStyle}>
          중요일정
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
