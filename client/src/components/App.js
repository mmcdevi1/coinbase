import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './landing_page/LandingPage';
import Register from './auth/Register';
import Login from './auth/Login';
import Logout from './auth/Logout';
import AuthenticateUser from './auth/Authentication';
import Marketplace from './Marketplace'

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
              <div className="container main-image">
                <div id="wrapper">
                  <div id="page" className="form-width">
                    <div id="content_container">
                      <Route path="/register" component={Register} />
                      <Route path="/login" component={Login} />
                    </div>
                  </div>
                </div>
              </div>
            <Route path="/logout" component={Logout} />
            <Route path="/marketplace" component={AuthenticateUser(Marketplace)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null)(App);