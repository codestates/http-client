import React, { useCallback, useReducer } from "react";
import { Link } from "react-router-dom";

import "./Edit.css";

/*****************************************************************
                            리액트 훅 명세표

(1) useReducer
 - Input 개체가 다수일 때, 이것들에 의한 state 변화를 한번에 관리하기 위함
 - 클래스 컴포넌트에서 e.target.value들에 대한 setState를 한번에 한 것과 동일
 - 

(2) useCallback
 - ToDo.js 컴포넌트의 주석 참조 부탁드립니다.
******************************************************************/

// reducer hook 액션 정의
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Edit = ({ makeChange }) => {
  // reducer hook으로 한꺼번에 state 관리할 대상 정의
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
    userName: "",
    mobile: "",
  });

  const { email, password, userName, mobile } = state;

  // reducer hook 구동 대상("액션값")은 "이벤트 객체(e.target 값)"라고 설정
  const onChange = (e) => {
    dispatch(e.target);
  };

  // reducer hook 구동 결과(state)를 부모(MyPage.js) 컴포넌트로 끌어올리기
  const onClick = useCallback(() => {
    console.log(`제출!! =======>
    최종제출 이메일: ${state.email}
    최종제출 비밀번호: ${state.password}
    최종제출 이름: ${state.userName}
    최종제출 연락처: ${state.mobile}
    `);

    makeChange(state);
  }, [makeChange, state]);

  return (
    <>
      <section>
        <div className="myinfo-title">회원정보</div>
        <hr />
        <div>
          <div>
            <div className="description">e-mail</div>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="변경할 이메일을 입력하세요"
              onChange={onChange}
            ></input>
          </div>
          <div>
            <div className="description">PW</div>
            <input
              type="text"
              name="password"
              value={password}
              placeholder="변경할 비밀번호를 입력하세요"
              onChange={onChange}
            ></input>
          </div>
          <div>
            <div className="description">고객명</div>
            <input
              type="text"
              name="userName"
              value={userName}
              placeholder="변경할 고객명을 입력하세요"
              onChange={onChange}
            ></input>
          </div>
          <div>
            <div className="description">연락처</div>
            <input
              type="text"
              name="mobile"
              value={mobile}
              placeholder="변경할 연락처를 입력하세요"
              onChange={onChange}
            ></input>
          </div>
        </div>
      </section>
      <div>
        <button onClick={onClick}>수정</button>
      </div>
    </>
  );
};

export default Edit;
