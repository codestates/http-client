import React from 'react'
import { NavLink } from 'react-router-dom'

class CompletedFindPw extends React.Component {

  render() {
    console.log(this.props.history)
    return (
      <div className='modal'>

        <div className='modal_overlay'></div>
        <div className='modal_content'>
          <h2>e-mail</h2>

          <div className='container'>

            <h2>PW</h2>
            <div className='find_pw_box'>
              <div className='information'>
                {`귀하의 비밀번호는 ${this.props.history.location.state.pw}입니다.`}  {/* 재성님께서 멘트 통째로 보내주기로 함. */}
              </div>
            </div>




            <NavLink to='' className='signUp_link'>
              <button className='signUp_btn'>로그인 페이지로 돌아가기</button>
            </NavLink>

          </div>
        </div>

      </div>
    )
  }
}

export default CompletedFindPw;