import React from 'react'
import { NavLink } from 'react-router-dom'

class FindAccount extends React.Component {

  render() {
    return (
      <div className='modal'>

        <div className='modal_overlay'></div>
        <div className='modal_content'>
          <h2>e-mail 찾기</h2>

          <div className='container'>

            <div className='find_e-mail_box'>
              <div>
                <span>고객명</span>
                <input type='text'></input>
              </div>

              <div>
                <span>연락처</span>
                <input type='text'></input>
              </div>

            </div>
            <NavLink to='/useremail'>
              <button className='findBtn'>e-mail 찾기</button>
            </NavLink>
            <div className='line'> </div>

            <h2>PW 찾기</h2>
            <div className='find_pw_box'>

              <div className='inputInfo'>
                <span className='email_span'>e-mail</span>
                <input type='email'></input>

              </div>
              <div>
                <span>고객명</span>
                <input type='text'></input>
              </div>

              <div>
                <span>연락처</span>
                <input type='text'></input>

              </div>

            </div>

            <NavLink to='/userpw'>
              <button className='findBtn'>PW 찾기</button>
            </NavLink>


            <NavLink to='' className='signUp_link'>
              <button className='signUp_btn'>회원 가입</button>
            </NavLink>

          </div>
        </div>

      </div>
    )
  }
}

export default FindAccount;