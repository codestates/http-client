import React from "react";
import { Link, NavLink } from "react-router-dom";

// components
import Remove from "../components/Remove";
import Edit from "../components/Edit";
import "./MyPage.css";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: this.props.password,
      userName: this.props.userName,
      mobile: this.props.mobile,
    };
    console.log(`로그인 유저정보
  * 이름: ${this.state.userName}   * 이메일: ${this.state.email}    * 비밀번호: ${this.state.password}   * 연락처: ${this.state.mobile}
  `);
  }

  makeChange(data) {
    if (data.email !== "") this.setState({ email: data.email });
    if (data.password !== "") this.setState({ password: data.password });
    if (data.userName !== "") this.setState({ userName: data.userName });
    if (data.mobile !== "") this.setState({ mobile: data.mobile });
    this.props.adoptModifiedInfo(data);
  }

  componentDidMount() {
    this.makeChange;
  }

  render() {
    const { email, password, userName, mobile } = this.state;
    return (
      <>
        <section>
          <div className="myinfo-title">&#129296; 회원정보</div>
          <div>
            <div>
              <div className="description">e-mail</div>
              <div className="print">{email}</div>
            </div>
            <div>
              <div className="description">PW</div>
              <div className="print">
                {String(password).slice(0, 1) + "******"}
              </div>
            </div>
            <div>
              <div className="description">고객명</div>
              <div className="print">{userName}</div>
            </div>
            <div>
              <div className="description">연락처</div>
              <div className="print">{mobile}</div>
            </div>
          </div>
          <div className="myinfobox">
            <div>
              <button className="remove-button">
                <Link
                  to={"/remove"}
                  style={{ textDecoration: "none", color: "white" }}
                  email={email}
                  password={password}
                  userName={userName}
                  mobile={mobile}
                >
                  회원탈퇴
                </Link>
              </button>
            </div>
          </div>
        </section>
        <section>
          <Edit
            to={"/edit"}
            style={{ textDecoration: "none", color: "black" }}
            makeChange={this.makeChange.bind(this)}
          />
        </section>
      </>
    );
  }
}
export default MyPage;