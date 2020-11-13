import React from 'react'
import { NavLink } from 'react-router-dom'
import user from '../test_data_user.json'
import axios from 'axios'



class SignInModal extends React.Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        };

    }
    // e-mail, pw 입력 기능
    hadleInputValue = (key) => (text) => {
        // console.log('잘 작성이 되나?')
        // console.log('key', key)
        // console.log('text', text)
        this.setState({
            [key]: text.target.value
        });
    }


    handleSignIn = () => {

        const signInfo = {
            email: this.state.email,
            password: this.state.password,
            errorMessage: this.state.erroeMessage
        }


        if (!signInfo.email.length || !signInfo.password.length) {
            this.setState({
                errorMessage: 'e-mail과 PW를 입력하세요.'
            })
        }
        //* 입력이 된 값으로 서버에 로그인 요청을 하고, props로 전달된 callback을 호출
        // else {  //! 추후 알맞게 수정하기, 우선은 fackdata로
        //     axios.post('http://localhost:8000/', signInfo)
        //         .then(res => {
        //             this.props.handleResponseSuccess()
        //         })
        //         .catch(error => {
        //             this.setState({
        //                 errorMessage: 'e-mail 혹은 PW가 일치하지 않습니다.'
        //             })
        //         })
        // }
        else {
            if (user[0].email === this.state.email && user[0].password === this.state.password) {
                this.props.handleResponseSuccess()
                console.log(this.props)
            }
            else (
                this.setState({
                    errorMessage: 'e-mail 혹은 PW가 일치하지 않습니다.'
                })
            )
        }
        console.log(user)
    }

    render() {

        return (

            <div className='modal hidden'>


                <div className='modal_overlay'></div>
                <div className='modal_content'>
                    <h1>너의 시간을 겟~⭐️</h1>

                    <div className='container'>

                        <div className='signUp_div'>
                            <NavLink to='/signup' className='signUp_link'>아직 회원이 아니신가요?</NavLink>
                            {/* <div onClick={this.handleClick} onChange={this.moveSignUp} id="to_signUp">아직 회원이 아니신가요?</div> */}
                        </div>

                        {/* <img src='https://gdimg.gmarket.co.kr/1496139073/still/600?ver=1537817021'></img> */}

                        <img id='sign_in_img' src='https://t1.daumcdn.net/cfile/tistory/992C413B5D2ACF7C1D'></img>


                        <div className='container1'>

                            <div className='email_div'>
                                <span className='email_span'>e-mail</span>
                                <input type='email' onChange={this.hadleInputValue("email")}></input>
                            </div>

                            <div className='PW_div'>
                                <span>PW</span>
                                <input type='password' onChange={this.hadleInputValue("password")}></input>
                            </div>
                        </div>

                        <div className='findAccount_span'>
                            <span>
                                <NavLink to='/findaccount' className='findAccount_link'>e-mail | PW 찾기</NavLink>
                            </span>
                        </div>

                        <div>
                            {/* <NavLink to="/todo"> */}
                            <button className='loginButton' type='submit' onClick={this.handleSignIn}>로그인</button>
                            {/* </NavLink> */}
                            <div>
                                <button className='loginButton'>Github 로그인</button>
                            </div>
                            <div className='alert-box'>{this.state.errorMessage}</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}

export default SignInModal;


