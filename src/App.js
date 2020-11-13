import React from "react";
import { HashRouter, Route } from "react-router-dom";

// Components
import Nav from "./components/Nav";
// import SignInModal from "./components/SignIn";
import SignUpModal from "./components/SignUp";
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

class App extends React.Component {
  state = {
    isLogin: true,
  };
  render() {
    const { isLogin } = this.state;

    return (
      <HashRouter>
        <div className="menu">
          <Nav />
        </div>
        <div className="screen">
          {/* <Route path={"/"} exact={true} component={isLogin ? ToDo : SignInModal} /> */}
          <Route path={"/"} exact={true} component={ToDo} />
          <Route path={"/todo"} exact={true} component={ToDo} />
          <Route path={"/mypage"} component={MyPage} />
          <Route path={"/completed"} component={Completed} />
          <Route path={"/Important"} component={Important} />
          <Route path={"/signup"} component={SignUpModal} />
          <Route path={"/edit"} component={Edit} />
          <Route path={"/remove"} component={Remove} />
        </div>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
