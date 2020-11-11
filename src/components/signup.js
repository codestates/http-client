import React from 'react'
import { NavLink } from 'react-router-dom'




class SignUpModal extends React.Component {

  render() {
    return (
      <div className='modal hidden'>

        <div className='modal_overlay'></div>
        <div className='modal_content'>
          <h1>너의 시간을 겟~⭐️</h1>

          {/* <img src='https://gdimg.gmarket.co.kr/1496139073/still/600?ver=1537817021'></img> */}


          <div className='container'>

            <img src='https://t1.daumcdn.net/cfile/tistory/992C413B5D2ACF7C1D'></img>

            <div className='container1'>

              <div className='email_div'>
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








            <div className='findAccount_span'>
              <span>
                <NavLink to=''>e-mail</NavLink>
                <span> | </span>
                <NavLink to=''>PW 찾기</NavLink>
              </span>
            </div>

            <div>
              <div>
                <button className='loginButton'>로그인</button>
              </div>
              <div>
                <button className='loginButton'>Github 로그인</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default SignUpModal;