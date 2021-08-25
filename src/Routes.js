import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Hyunjae */
import LoginHyunJae from "./pages/hyunjaeKim/Login/Login";
import MakeAccountJae from "./pages/hyunjaeKim/Login/makeAccount";
import MainHyunJae from "./pages/hyunjaeKim/Main/Main";

/* Taesoo */
import LoginTaeSoo from "./pages/taesooKim/Login/Login";
import MainTaeSoo from "./pages/taesooKim/Main/Main";

/* Younghyun */
import LoginYoungHyun from "./pages/younghyunKim/Login/Login";
import MainYoungHyun from "./pages/younghyunKim/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-jae" component={LoginHyunJae} />
          <Route exact path="/account-jae" component={MakeAccountJae} />
          <Route exact path="/main-jae" component={MainHyunJae} />
          <Route exact path="/login-soo" component={LoginTaeSoo} />
          <Route exact path="/main-soo" component={MainTaeSoo} />
          <Route exact path="/login-hyun" component={LoginYoungHyun} />
          <Route exact path="/main-hyun" component={MainYoungHyun} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
