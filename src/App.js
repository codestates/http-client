import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/nav'
import MyPage from './routes/mypage'
import ToDo from './routes/todo'
import Important from './routes/important'
import Completed from './routes/complete'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Geust',
    }
  }

  render() {
    return (
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path='/todo' component={ToDo} />
          <Route path='/mypage' component={MyPage} />
          <Route path='/important' component={Important} />
          <Route path='/completed' component={Completed} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
