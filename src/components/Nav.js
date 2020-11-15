import React from "react";
import { Link } from "react-router-dom";

// components
import Welcome from "../components/Welcome";
import SignOut from "../components/SignOut";

// CSS
import "./Nav.css";

const NavLinkStyle = {
  textDecoration: `none`,
  color: `white`,
};

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Nav프롭', this.props)

    return (
      <ul className="nav">
        <div className="nav-welcome">
          <Welcome userName={this.props.loginUserName} /> {/* welcome 컴포넌트로 전달 */}
          <SignOut logOut={this.props.resetLogin} />  {/* signOut 컴포넌트로 전달 */}
        </div>

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
}

export default Nav;
