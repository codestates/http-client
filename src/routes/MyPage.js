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

  /* 1. history.push.location을 이용해 props를 회원탈퇴 컴포넌트로 이동 
     2. pw도 같이 담아 보내기 
  */
  // tossUserPwToSignOut = ({ history }) => {

  // }


  componentDidMount() {
    this.makeChange;
  }

  render() {
    console.log('마이페이지 props', this.props)
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

                {/* props내리기 --> 아래와 같이 작성하면 props.location 혹은 props.history.location에 아래 정보가 담겨 전달
                    전달받은 Remove.js는 this.props.location 혹은 this.props.history.location에 담긴 pw를 사용할 수 있음
                */}
                <Link to={{
                  pathname: "/remove",
                  state: {
                    password: this.props.password
                  },
                  signOut: this.props.signOut   // 메소드화가 되어 전달되어질 것. ex) signOut();
                }}

                // to={"/remove"}
                // style={{ textDecoration: "none", color: "white" }}
                // email={email}
                // password={password}
                // userName={userName}
                // mobile={mobile}
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