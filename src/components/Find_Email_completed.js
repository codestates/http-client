import React from 'react'
import { NavLink } from 'react-router-dom'

class CompletedFindEmail extends React.Component {

  render() {
    return (
      <div className='modal_signUp'>

        <div className='modal_overlay'></div>
        <div className='modal_content'>
          <h2>e-mail</h2>

          <div className='container'>

            <div className='find_e-mail_box'>
              <div className='information'>
                {`귀하의 e-mail은 성유리gmail.com입니다.`}  {/* 재성님께서 멘트 통째로 보내주기로 함. */}
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

export default CompletedFindEmail;