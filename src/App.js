import React from "react";
import { HashRouter, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import SignInModal from "./components/SignIn";
import SignUpModal from "./components/SignUp";
import Footer from "./components/Footer";

// Routes
import MyPage from "./routes/MyPage";
import ToDo from "./routes/ToDo";
import Completed from "./routes/Completed";
import Important from "./routes/Important";



// CSS
import "./App.css";

class App extends React.Component {
  state = {
    isLogin: true
  }
  render() {
    const { isLogin } = this.state;

    return (
      <HashRouter>
        <div className="menu">
          <Nav />
        </div>
        <div className="screen">
          <Route path={"/"} exact={true} component={isLogin ? ToDo : SignInModal} />
          <Route path={"/todo"} component={ToDo} />
          <Route path={"/mypage"} component={MyPage} />
          <Route path={"/completed"} component={Completed} />
          <Route path={"/Important"} component={Important} />
          <Route path={"/signup"} component={SignUpModal} />

        </div>
        <Footer />


      </HashRouter>
    );
  }
}

export default App;
