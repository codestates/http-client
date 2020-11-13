import React from "react";
import { HashRouter, Route, Router } from "react-router-dom";
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
import Footer from "./components/Footer";

// Routes
import MyPage from "./routes/MyPage";
import ToDo from "./routes/ToDo";
import Completed from "./routes/Completed";
import Important from "./routes/Important";

// CSS
import "./App.css";

import user from "./test_data_user.json";

class App extends React.Component {
  state = {
    isLogin: false,
    userinfo: null,
    username: null,
  };

  //! 인증 성공. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꾸기.

  handleResponseSuccess() {
    // ! 추후 알맞게 수정할 것
    // axios.get("http").then((res) => {
    //   this.setState({
    //     isLogin: false,
    //     userinfo: res.data.email,
    //     password: res.data.password,
    //     username: res.data.username,
    //     mobile: res.data.mobile,
    //   });
    // });
    this.setState({
      isLogin: true,
      userinfo: user[0].email,
      username: user[0].name,
    });
  }

  render() {
    const { isLogin } = this.state;
    console.log(isLogin);

    return (
      <HashRouter>
        <div className="welcome">
          <Welcome name={this.state.username} />
        </div>
        <div className="menu">
          <Nav />
        </div>
        <div className="screen">
          <Route
            path={"/"}
            exact={true}
            component={isLogin ? ToDo : SignInModal}
          />
          <Route path={"/"} exact={true} component={ToDo} />
          <Route path={"/todo"} component={ToDo} />
          <Route
            path={"/mypage"}
            render={() => <MyPage userinfo={this.state.userinfo} />}
          />
          <Route path={"/completed"} component={Completed} />
          <Route path={"/Important"} component={Important} />
          <Route path={"/signup"} component={SignUpModal} />
          <Route path={"/findaccount"} component={FindAccount} />
          <Route path={"/useremail"} component={CompletedFindEmail} />
          <Route path={"/userpw"} component={CompletedFindPw} />

          <Route path={"/edit"} component={Edit} />
          <Route path={"/remove"} component={Remove} />
        </div>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
