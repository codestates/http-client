import React from "react";
import { Link } from "react-router-dom";

// components
import Welcome from "../components/Welcome";
import SignOut from "../components/SignOut";

// CSS
import "./Nav.scss";

const NavLinkStyle = {
  textDecoration: `none`,
  color: `white`,
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="nav">
        <div className="nav-welcome">
          <Welcome name={this.props.loginUserInfo.name} />{" "}
          {/* welcome 컴포넌트로 전달 */}
          <SignOut
            logOut={this.props.resetLogin}
            loginStatus={this.props.loginUserInfo.isLogin}
          />{" "}
          {/* signOut 컴포넌트로 전달 */}
        </div>

        <li className="nav-todo">
          <Link to={"/"} style={NavLinkStyle}>
            홈
          </Link>
        </li>
        <li className="nav-mypage">
          <Link to={"/mypage"} style={NavLinkStyle}>
            마이페이지
          </Link>
        </li>
        <li className="nav-important">
          <Link to={"/important"} todos={this.props.todos} style={NavLinkStyle}>
            중요일정
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
