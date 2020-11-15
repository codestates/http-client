import React from "react";
import { Link } from "react-router-dom";
// components
import Remove from "../components/Remove";
import Edit from "../components/Edit";
import "./MyPage.css";
function MyPage(props) {
  console.log('Mypage', props.userinfo);
  if (props.userinfo) {
    return (
      <>
        <section className="myinfo-print">
          <div className="myinfo-title">&#129296; 회원정보</div>
          <div className="myinfo-body">
            <div className="object-email">
              <div className="description-email">e-mail</div>
              <div className="print-email">{props.userinfo.email}</div>
            </div>
            <div className="object-pw">
              <div className="description-pw">PW</div>
              <div className="print-pw">{props.userinfo.password}</div>
            </div>
            <div className="object-name">
              <div className="description-name">고객명</div>
              <div className="print-name">{props.userinfo.name}</div>
            </div>
            <div className="object-mobile">
              <div className="description-mobile">연락처</div>
              <div className="print-mobile">{props.userinfo.mobile}</div>
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
  } else {
    return <></>;
  }
}
export default MyPage;