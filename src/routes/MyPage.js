import React from "react";
import { Link } from "react-router-dom";

// components
// import Remove from "../components/Remove";
// import Edit from "../components/Edit";

import "./MyPage.css";

// test data
import user from "../test_data_user.json";

class MyPage extends React.Component {
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
  }

  // 1. 로그인 성공 유저 정보 확인
  getUser = async () => {
    // const user = await axiox.get("http://localhost:8000/mypage"); // 노드서버 구축완료시 활성화 & 테스트
    await this.setState({
      id: user[0].id,
      email: user[0].email,
      password: user[0].password,
      name: user[0].name,
      mobile: user[0].mobile,
      currentUser: user[0],
    });
  };

  // 2. Life Cycle에 반영
  componentDidMount() {
    this.getUser();
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
              <div className="print-email">{email}</div>
            </div>
            <div className="object-pw">
              <div className="description-pw">PW</div>
              <div className="print-pw">{password}</div>
            </div>
            <div className="object-name">
              <div className="description-name">고객명</div>
              <div className="print-name">{name}</div>
            </div>
            <div className="object-mobile">
              <div className="description-mobile">연락처</div>
              <div className="print-mobile">{mobile}</div>
            </div>
          </div>
          <div className="myinfobox">
            <div>
              <button className="edit-button">
                <Link
                  to={"/edit"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  회원정보 수정
                </Link>
              </button>
            </div>
            <div>
              <button className="remove-button">
                <Link
                  to={"/remove"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  회원탈퇴
                </Link>
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MyPage;
