import React from 'react'
import { NavLink } from 'react-router-dom'

class CompletedFind extends React.Component {

  render() {
    return (
      <div className='modal_signUp'>

        <div className='modal_overlay'></div>
        <div className='modal_content'>
          <h1>e-mail</h1>

          {/* <img src='https://gdimg.gmarket.co.kr/1496139073/still/600?ver=1537817021'></img> */}


          <div className='container'>



            <div className='find_e-mail_box'>
              <div className='information'></div>
            </div>


            <div className='line'> </div>


            <div className='find_pw_box'>
              <div className='information'></div>
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

export default CompletedFind;