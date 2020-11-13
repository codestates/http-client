import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import "./Edit.css";

// test data
import user from "../test_data_user.json";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      email: null,
      password: null,
      name: null,
      mobile: null,
      currentUser: [],
    };
    console.log(props);
  }

  // 1. Life Cycle에 반영
  componentDidMount() {
    this.handleInputValue();
  }

  // 2. 변경사항 입력
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  inputEdit() {
    // const user = await axios.post("http://localhost:8000/mypage", {
    //     email: email,
    //     password: password,
    //     name: name,
    //     mobile: mobile
    // })  // 노드서버 구축완료시 활성화 & 테스트
    user.push({
      content: this.state.content,
      startDate: this.state.startDate,
      important: this.state.important,
      complete: this.state.complete,
    });
    this.props.history.push("/mypage");
  }

  // 3. 컴포넌트 최종내용 렌더링
  render() {
    const { email, password, name, mobile, isEdit } = this.state;
    return (
      <>
        <section className="myinfo-print">
          <div className="myinfo-title">회원정보</div>
          <hr className="myinfo-hr" />
          <div className="myinfo-body">
            <div className="object-email">
              <div className="description-email">e-mail</div>
              <input
                type="text"
                className="edit-email"
                onChange={this.handleInputValue("email")}
              ></input>
            </div>
            <div className="object-pw">
              <div className="description-pw">PW</div>
              <input
                type="text"
                className="edit-pw"
                onChange={this.handleInputValue("password")}
              ></input>
            </div>
            <div className="object-name">
              <div className="description-name">고객명</div>
              <input
                type="text"
                className="edit-name"
                onChange={this.handleInputValue("name")}
              ></input>
            </div>
            <div className="object-mobile">
              <div className="description-mobile">연락처</div>
              <input
                type="text"
                className="edit-mobile"
                onChange={this.handleInputValue("mobile")}
              ></input>
            </div>
          </div>
        </section>
        <div className="submit-button-area">
          <button className="submit-button">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              수정완료
            </Link>
          </button>
        </div>
      </>
    );
  }
}

export default Edit;
