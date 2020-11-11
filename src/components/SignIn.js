import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUpModal from './SignUp'



function SignInModal() {

    // class SignInModal extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         signUp: false // 회원가입 활성화 x
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    //     this.moveSignUp = this.moveSignUp.bind(this)
    // }


    // handleClick() {
    //     // console.log('잘눌림?')
    //     this.setState(state => ({
    //         signUp: !state.signUp  // 기존 state값 반전
    //     }))
    //     this.moveSignUp()
    // }

    // // signIn 모달을 없애고 signUp 모달을 가져온다. 
    // moveSignUp() {

    //     history.push('/signup')

    // //signIn 모달 엘리먼트 및 하위 엘리먼트들 삭제
    // let signIn = document.querySelector('.modal_signIn')
    // signIn.parentNode.removeChild(signIn)

    // //signUp 모달 엘리먼트 가져오기

    // let parent = document.querySelector('.screen')
    // let parent1 = parent.parentNode

    // let signUp = document.querySelector('.modal_signUp')
    // let signUp1 = signUp.parentNode
    // // let insertNode = document.importNode(signUp, true)
    // //appendChild로 종속시켜버리기
    // parent1.parentNode.appendChild(signUp1)



    // return modal.forEach(element => {
    //     return modal2.forEach(el => {
    //         return element = el
    //     })
    // })


    // modal.classList.remove('modal_signIn')
    // modal.classList.add('modal_signUp')
    // modal.classList.toggle('')
    // }


    // render() {
    return (
        <div className='modal_signIn hidden'>


            <div className='modal_overlay'></div>
            <div className='modal_content'>
                <h1>너의 시간을 겟~⭐️</h1>

                {/* <img src='https://gdimg.gmarket.co.kr/1496139073/still/600?ver=1537817021'></img> */}


                <div className='container'>

                    <div className='signUp_div'>
                        <NavLink to='/signup' className='signUp_link'>아직 회원이 아니신가요?</NavLink>
                        {/* <div onClick={this.handleClick} onChange={this.moveSignUp} id="to_signUp">아직 회원이 아니신가요?</div> */}
                    </div>

                    {/* <img src='https://gdimg.gmarket.co.kr/1496139073/still/600?ver=1537817021'></img> */}
                    <img src='https://t1.daumcdn.net/cfile/tistory/992C413B5D2ACF7C1D'></img>

                    <div className='container1'>

                        <div className='email_div'>
                            <span className='email_span'>e-mail</span>
                            <input type='email'></input>
                        </div>

                        <div className='PW_div'>
                            <span>PW</span>
                            <input type='password'></input>
                        </div>
                    </div>

                    <div className='findAccount_span'>
                        <span>
                            <NavLink to='' className='findAccount_link'>e-mail</NavLink>
                            <span> | </span>
                            <NavLink to='' className='findAccount_link'>PW 찾기</NavLink>
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


export default SignInModal;


