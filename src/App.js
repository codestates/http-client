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
      uesrId: null,
      email: null,
      password: null,
      name: null,
      mobile: null,
      errorMessage: "",
      todos: [], // A$AP funckin' added on  
    };
  }

  // 세션 저장소에 저장된 id를 불러와 req하자.
  handleResponseSuccess() {

    // axios.post(`http://54.180.79.137:8000/main`)
    //   .then(response => {
    //     console.log("뭘 받아와?", response)
    this.setState({
      isLogin: true,

      // email: response.data.email,
      // password: response.data.password,
      // name: response.data.name,
      // mobile: response.data.mobile
    })
    // })
    // .catch(error => {
    //   this.setState({
    //     errorMessage: error.response
    //   })
    // })

    // async function getUser() {
    //   try {
    //     const response = await axios.get(`http://54.180.79.137:8000/main}`);
    //     console.log("getUser", response)

    //     this.setState({
    //       isLogin: true,
    //       email: response.data.email,
    //       password: response.data.password,
    //       name: response.data.name,
    //       mobile: response.data.mobile
    //     })

    //   } catch (error) {
    //     console.log(error)
    //     this.setState({
    //       errorMessage: error.response.data
    //     })
    //   }
    // }
  }




  //! 인증 성공. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾸기.
  // handleResponseSuccess() {   // ! 추후 알맞게 수정할 것
  //   axios.get('http://54.180.79.137:8000/main')
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         isLogin: false,
  //         email: res.data.email,
  //         password: res.data.password,
  //         name: res.data.name,
  //         mobile: res.data.mobile
  //       })
  //     })
  // }

  // fakedata 용 코드
  // 로그인 성공시 해당 유저로 상태변경
  // handleResponseSuccess = () => {
  //   // ! 추후 알맞게 수정할 것
  //   /// 로그인 성공하면 ToDo 컴포넌트로 해당 유저의 정보가 props로 전달이 됨
  //   this.setState({
  //     isLogin: true,
  //     email: user[0].email,
  //     password: user[0].password,
  //     name: user[0].name,
  //     mobile: user[0].mobile,
  //   });

  //   // this.props.history.push("/")
  // };

  //로그아웃
  // 서버연동시 아래 코드 주석 해제하기
  handleSignOut = () => {
    // axios.post("https://localhost:8000/signout")
    //   .then(() => {
    this.setState({
      isLogin: false,
      email: null,
      password: null,
      name: null,
      mobile: null,
    });
    // })
    this.doSignOut();
  };

  // Edit 컴포넌트의 결과를 끌어올린다.
  adoptModifiedInfo = (data) => {
    if (data.email !== "") this.setState({ email: data.email });
    if (data.password !== "") this.setState({ password: data.password });
    if (data.name !== "") this.setState({ name: data.name });
    if (data.mobile !== "") this.setState({ mobile: data.mobile });
  };

  // A$AP funckin' added on
  getTodos = (data) => {
    this.setState({ todos: data });
  };

  // 변경된 유저정보 상태를 유지시켜 로그인 상태 혹은 로그아웃 상태를 유지시킨다.
  componentDidMount() {
    const userEmail = window.sessionStorage.getItem("email");
    if (userEmail) {
      this.handleResponseSuccess();
      this.getTodos;
    } else {
      this.handleSignOut();
    }
  }

  doSignOut = () => {
    window.sessionStorage.clear();
  };

  render() {
    console.log("세션스토리지", window.sessionStorage.getItem("email"));
    console.log("App스테이트", this.state);
    const { isLogin, email, name, password, mobile, todos } = this.state;
    // console.log(isLogin)
    return (
      <HashRouter>
        <div className="menu">
          {/* 1. 로그인 성공시 해당 유저의 이름을 메뉴바 상단에 "***님 환영합니다." 라고 표시하기 위해 welcome 컴포넌트까지 건네줄 것
              2. 로그아웃기능을 위해 하위 컴포넌트인 Nav로, 그리고 다시 SignOut 컴포넌트로 내릴 것. */}
          <Nav resetLogin={this.handleSignOut} loginUserInfo={this.state} />
        </div>
        <div className="screen">
          <Route
            path={"/"}
            // path={"/mypage"}
            exact={true}
            render={() =>
              isLogin ? ( // 새로고침해도 로그인 상태를 유지시키기 위해 localstorage에 저장된 정보를 사용한다. local storage는 사용자가 지우지 않는 이상 영구적으로 계속 브라우저에 남아있음 (단, session storage는 브라우저가 닫은 겨우 사라지고, 브라우저 내에서 탬을 생성하는 경우에도 별도의 영역으로 할당됨.)
                // <ToDo
                //   email={email}
                //   name={name}
                //   todos={todos} // A$AP funckin' added on
                //   getTodos={this.getTodos} // A$AP funckin' added on
                // />
                <MyPage />
              ) : (
                  <SignInModal
                    handleResponseSuccess={this.handleResponseSuccess.bind(this)}
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
                  name={name}
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
          <Route
            path={"/completed"}
            render={() =>
              isLogin ? (
                <Completed email={email} todos={todos} /> // A$AP funckin' added on
              ) : (
                  <Completed />
                )
            }
          />
          <Route
            path={"/important"}
            render={() =>
              isLogin ? (
                <Important email={email} todos={todos} /> // A$AP funckin' added on
              ) : (
                  <Important />
                )
            }
          />
          <Route path={"/signup"} component={SignUpModal} />
          <Route path={"/findaccount"} component={FindAccount} />
          <Route path={"/useremail"} component={CompletedFindEmail} />
          <Route path={"/userpw"} component={CompletedFindPw} />
          <Route path={"/edit"} component={Edit} />
          <Route path={"/remove"} component={Remove} />
          <Route path={"/remove_user_completed"} component={RemoveUserCompleted} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </HashRouter>
    );
  }
}
export default App;
