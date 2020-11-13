import React from 'react'
import { NavLink } from 'react-router-dom'


class SignUpModal extends React.Component {

  render() {
    return (

      <div className='modal'>

        <div className='modal_overlay'></div>
        <div className='modal_content'>
          <h1>회원 가입</h1>

          {/* <img src='https://gdimg.gmarket.co.kr/1496139073/still/600?ver=1537817021'></img> */}


          <div className='container'>

            <div className='container1'>

              <div className='inputInfo'>
                <span className='email_span'>e-mail</span>
                <input type='email'></input>
                <div className='check'>중복 확인</div>
              </div>

              <div>
                <span>PW</span>
                <input type='password'></input>
              </div>

              <div>
                <span>고객명</span>
                <input type='text'></input>
              </div>

              <div>
                <span>연락처</span>
                <input type='text'></input>
                <div className='check'>'-' 포함하여 입력해주세요</div>
              </div>
            </div>


            <NavLink to='' className='signUp_link'>
              <button className='signUp_btn'>회원 가입</button>
            </NavLink>

          </div>
        </div>
      </div>

    )

  }
}

export default SignUpModal;