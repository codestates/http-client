import React from 'react'
import { NavLink } from 'react-router-dom'

//Fake Data
import user from '../test_data_user.json'

class FindAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      userName: "",
      mobile: "",
      errorMessageEmail: "",
      errorMessagePw: ""
    }
  }

  handleInputValue = (key) => (text) => {
    console.log('질입력되나?')
    // console.log('k', key)
    // console.log('t', text)
    this.setState({
      [key]: text.target.value
    });

  }

  //* 연락처 형식 헬퍼 함수: '-' 삽입 필수 
  notFormedMobileNum = () => {
    const { mobile } = this.state;
    const userIdInfo = {
      mobile: mobile
    }
    let count = 0
    for (let i = 0; i < userIdInfo.mobile.length; i++) {
      if (userIdInfo.mobile[i] === '-') {
        count++
        if (count === 2) {
          console.log('c', count)
          return
        }
      }
    }

    this.setState({
      errorMessagePw: "'-'를 입력해주세요."
    })
  }

  handleFindEmailValue = () => {
    const { email, userName, mobile } = this.state;
    const userIdInfo = {
      email: email,
      userName: userName,
      mobile: mobile
    }
    if (userIdInfo.userName === user[0].name && userIdInfo.mobile === user[0].mobile) {
      // console.log(this.props)
      this.props.history.push({ pathname: '/useremail', state: { email: userIdInfo.email } })  // CompletedFindEmail에 props로 입력 값 넘겨주기
    }
    else if (!userIdInfo.userName.length || !userIdInfo.mobile.length) {
      this.setState({
        errorMessageEmail: "모든 항목을 입력하세요."
      })
    }
    else if (userIdInfo.userName !== user[0].name || userIdInfo.mobile !== user[0].mobile) {
      this.setState({
        errorMessageEmail: "일치하는 e-mail이 없습니다."
      })
    }

  }

  handleFindPwValue = () => {
    const { email, userName, mobile } = this.state;
    const userPwInfo = {
      email: email,
      userName: userName,
      mobile: mobile
    }
    if (userPwInfo.email === user[0].email && userPwInfo.userName === user[0].name && userPwInfo.mobile === user[0].mobile) {
      this.props.history.push('/userpw')
    }
    else if (!userPwInfo.email.length || !userPwInfo.userName.length || !userPwInfo.mobile.length) {
      this.setState({
        errorMessagePw: "모든 항목을 입력하세요."
      })
    }
    else if (userPwInfo.email !== user[0].email || userPwInfo.userName !== user[0].name || userPwInfo.mobile !== user[0].mobile) {

      this.setState({
        errorMessagePw: "비밀번호를 찾지 못하였습니다."
      })
      this.notFormedMobileNum()  // 연락처 형식 맞추는게 우선순위이니.
    }
    else {

      this.notFormedMobileNum()

      // if (!userIdInfo.mobile.includes('-')) {
      //   this.setState({
      //     errorMessageEmail: "000-0000-0000 형식으로 입력해주세요."
      //   })
      // }



    }
  }

  render() {
    return (
      <div className='modal'>

        <div className='modal_overlay'></div>
        <div className='modal_content'>

          {/* -----------------이메일 찾기------------------ */}

          <h2>e-mail 찾기</h2>

          <div className='container'>

            <form className='find_e-mail_box' onSubmit={(e) => e.preventDefault()}>
              <div>
                <span>고객명</span>
                <input type='text' onChange={this.handleInputValue("userName")}></input>
              </div>

              <div>
                <span>연락처</span>
                <input type='text' onChange={this.handleInputValue("mobile")}></input>
              </div>

            </form>

            <div>{this.state.errorMessageEmail}</div>

            {/* <NavLink to='/useremail'> */}
            <button className='findBtn' onClick={this.handleFindEmailValue}>e-mail 찾기</button>
            {/* </NavLink> */}


            <div className='line'> </div>

            {/* -----------------패스워드 찾기------------------ */}

            <h2>PW 찾기</h2>
            {/* 바로 아랫 줄 코드. 이메일 형식이 안맞으면 말풍선으로 에러 메세지 띄움 */}
            <form onSubmit={(e) => e.preventDefault()}>

              <div className='find_pw_box'>
                <div className='inputInfo'>
                  <span className='email_span'>e-mail</span>
                  <input type='email' onChange={this.handleInputValue("email")} ></input>

                </div>
                <div>
                  <span>고객명</span>
                  <input type='text' onChange={this.handleInputValue("userName")}></input>
                </div>

                <div>
                  <span>연락처</span>
                  <input type='text' onChange={this.handleInputValue("mobile")}></input>

                </div>

              </div>
              <div>{this.state.errorMessagePw}</div>

              {/* <NavLink to='/userpw'> */}
              <button className='findBtn' onClick={this.handleFindPwValue} >PW 찾기</button>
              {/* </NavLink> */}
            </form>


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