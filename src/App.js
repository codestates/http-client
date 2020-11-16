import React from "react";
import { HashRouter, Route } from "react-router-dom";
import axios from "axios";

// Components
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import SignInModal from "./components/SignIn";
import SignUpModal from "./components/SignUp";
import FindAccount from "./components/Find_account";
import CompletedFindEmail from "./components/Find_Email_completed";
import CompletedFindPw from "./components/Find_PW_completed";
import Edit from "./components/Edit";
import Remove from "./components/Remove";
import RemoveUserCompleted from "./components/Remove_completed"
import Footer from "./components/Footer";


// Routes
import MyPage from "./routes/MyPage";
import ToDo from "./routes/ToDo";
import Completed from "./routes/Completed";
import Important from "./routes/Important";

// CSS
import "./App.css";

//fakedata
import user from "./test_data_user.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      email: null,
      password: null,
      userName: null,
      mobile: null,
    };
  }

  //! 인증 성공. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾸기.
  // handleResponseSuccess() {   // ! 추후 알맞게 수정할 것
  //   axios.get('http://localhost:8000')
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         isLogin: false,
  //         email: res.data.email,
  //         password: res.data.password,
  //         userName: res.data.userName,
  //         mobile: res.data.mobile
  //       })
  //     })
  // }

  // fakedata로 우선 구현
  // 로그인 성공시 해당 유저로 상태변경
  handleResponseSuccess = () => {
    // ! 추후 알맞게 수정할 것
    /// 로그인 성공하면 ToDo 컴포넌트로 해당 유저의 정보가 props로 전달이 됨
    this.setState({
      isLogin: true,
      email: user[0].email,
      password: user[0].password,
      userName: user[0].name,
      mobile: user[0].mobile,
    });

    // this.props.history.push("/")
  };

  //로그아웃
  // 서버연동시 아래 코드 주석 해제하기
  handleSignOut = () => {
    // axios.post("https://localhost:8000/signout")
    //   .then(() => {
    this.setState({
      isLogin: false,
      email: null,
      password: null,
      userName: null,
      mobile: null,
    });
    // })
    this.doSignOut();
  };

  // Edit 컴포넌트의 결과를 끌어올린다.
  adoptModifiedInfo = (data) => {
    if (data.email !== "") this.setState({ email: data.email });
    if (data.password !== "") this.setState({ password: data.password });
    if (data.userName !== "") this.setState({ userName: data.userName });
    if (data.mobile !== "") this.setState({ mobile: data.mobile });
  };

  // 변경된 유저정보 상태를 유지시켜 로그인 상태 혹은 로그아웃 상태를 유지시킨다.
  componentDidMount() {
    const userEmail = window.sessionStorage.getItem("email");
    if (userEmail) {
      this.handleResponseSuccess();
    } else {
      this.handleSignOut();
    }
  }

  doSignOut = () => {
    window.sessionStorage.clear();
  };

  render() {
    console.log("세션스토리지", window.sessionStorage);
    console.log("App스테이트", this.state);
    const { isLogin, email, userName, password, mobile } = this.state;
    // console.log(isLogin)
    return (
      <HashRouter>
        <div className="menu">
          {/* 1. 로그인 성공시 해당 유저의 이름을 메뉴바 상단에 "***님 환영합니다." 라고 표시하기 위해 welcome 컴포넌트까지 건네줄 것
              2. 로그아웃기능을 위해 하위 컴포넌트인 Nav로, 그리고 다시 SignOut 컴포넌트로 내릴 것. */}
          <Nav
            resetLogin={this.handleSignOut}
            loginUserInfo={this.state}
          />
        </div>
        <div className="screen">
          <Route
            path={"/"}
            exact={true}
            render={() =>
              isLogin ? ( // 새로고침해도 로그인 상태를 유지시키기 위해 localstorage에 저장된 정보를 사용한다. local storage는 사용자가 지우지 않는 이상 영구적으로 계속 브라우저에 남아있음 (단, session storage는 브라우저가 닫은 겨우 사라지고, 브라우저 내에서 탬을 생성하는 경우에도 별도의 영역으로 할당됨.)
                <ToDo email={email} userName={userName} />
              ) : (
                  <SignInModal
                    handleResponseSuccess={this.handleResponseSuccess}
                  />
                )
            }
          />
          <Route path={"/todo"} component={ToDo} />
          <Route
            path={"/mypage"}
            render={() =>
              isLogin ? (
                <MyPage
                  userName={userName}
                  email={email}
                  password={password}
                  mobile={mobile}
                  adoptModifiedInfo={this.adoptModifiedInfo}
                  signOut={this.handleSignOut}
                />
              ) : (
                  <MyPage />
                )
            }
          />
          <Route path={"/completed"} component={Completed} />
          <Route path={"/Important"} component={Important} />
          <Route path={"/signup"} component={SignUpModal} />
          <Route path={"/findaccount"} component={FindAccount} />
          <Route path={"/useremail"} component={CompletedFindEmail} />
          <Route path={"/userpw"} component={CompletedFindPw} />
          <Route path={"/edit"} component={Edit} />
          <Route path={"/remove"} component={Remove} />
          <Route path={"/remove_user_completed"} component={RemoveUserCompleted} />
        </div>
        <Footer />
      </HashRouter>
    );
  }
}
export default App;
