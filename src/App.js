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
import RemoveUserCompleted from "./components/Remove_completed";
import Footer from "./components/Footer";
// Routes
import MyPage from "./routes/MyPage";
import ToDo from "./routes/ToDo";
import Completed from "./routes/Completed";
import Important from "./routes/Important";
// CSS
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userId: null,
      email: null,
      password: null,
      name: null,
      mobile: null,
      errorMessage: "",
      todos: [],
    };
  }
  // 세션 저장소에 저장된 id를 불러와 req하자.
  handleResponseSuccess = () => {
    // axios
    // .get("https://api.get-todo.com/getMain", {
    //   id: window.sessionStorage.getItem("id"),
    // })
    axios({
      method: "GET",
      url: "https://api.get-todo.com/getMain",
      headers: {
        "Content-Type": "application/json",
        // accept: "application/json",
        // Cookie: window.sessionStorage.getItem("id"),
        withCreadentials: true,
        credentials: "include",
      },
    })
      .then((res) => {
        console.log("메인2 성공", res.data);
        this.setState({ todos: res.data });
      })
      .catch((error) => {
        console.log("메인2 에러", error.response);
      });
    this.setState({
      isLogin: true,
      email: window.sessionStorage.getItem("email"),
      userId: window.sessionStorage.getItem("id"),
      name: window.sessionStorage.getItem("name"),
    });
  };
  //로그아웃
  // 서버연동시 아래 코드 주석 해제하기
  handleSignOut = () => {
    axios({
      method: "GET",
      url: "https://api.get-todo.com/signout",
      headers: {
        "Content-Type": "application/json",
        // accept: "application/json",
        // Cookie: window.sessionStorage.getItem("id"),
        withCreadentials: true,
        credentials: "include",
      },
    })
      .then((response) => {
        console.log("사인아웃 리스폰스", response);
        this.setState({
          isLogin: false,
          email: null,
          password: null,
          name: null,
          mobile: null,
        });
        alert(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        alert("로그아웃에 실패하였습니다.");
      });
    this.doSignOut();
  };
  // Edit 컴포넌트의 결과를 끌어올린다.
  adoptModifiedInfo = (data) => {
    if (data.email !== "") this.setState({ email: data.email });
    if (data.password !== "") this.setState({ password: data.password });
    if (data.name !== "") this.setState({ name: data.name });
    if (data.mobile !== "") this.setState({ mobile: data.mobile });
  };
  // ToDo 컴포넌트의 결과를 끌어올린다.
  adoptRecentTodo = (data) => {
    this.setState({ todos: data });
  };
  componentDidMount() {
    const userEmail = window.sessionStorage.getItem("email");
    const userId = window.sessionStorage.getItem("userId");
    if (userEmail) {
      this.handleResponseSuccess();
    } else {
      // this.handleSignOut();
      window.sessionStorage.clear();
    }
    this.adoptRecentTodo;
    console.log("메인2 변경감지", this.state);
  }
  doSignOut = () => {
    window.sessionStorage.clear();
  };
  render() {
    console.log("App state 변경값", this.state);
    const {
      isLogin,
      userId,
      email,
      name,
      password,
      mobile,
      todos,
    } = this.state;
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
                <ToDo
                  userId={userId}
                  email={email}
                  name={name}
                  todos={todos}
                  adoptRecentTodo={this.adoptRecentTodo}
                />
              ) : (
                // <MyPage />
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
                  id={userId}
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
                <ImportantTodo
                  todos={() => {
                    axios
                      .get("https://api.get-todo.com/important", userId)
                      .then((res) => res.data);
                  }}
                />
              ) : (
                <ImportantTodo />
              )
            }
          />
          <Route path={"/signup"} component={SignUpModal} />
          <Route path={"/findaccount"} component={FindAccount} />
          <Route path={"/useremail"} component={CompletedFindEmail} />
          <Route path={"/userpw"} component={CompletedFindPw} />
          <Route path={"/edit"} component={Edit} />
          <Route path={"/remove"} component={Remove} />
          <Route
            path={"/remove_user_completed"}
            component={RemoveUserCompleted}
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </HashRouter>
    );
  }
}
export default App;
