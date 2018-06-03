import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import AuthenticateUser from './hoc/Authentication';

class PublicRoutes extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"      component={Home} />
          <Route path="/register"    component={Register} />
          <Route path="/login"       component={Login} />                    
          <Route path="/logout"      component={Logout} />  
        </Switch>
      </BrowserRouter>
    )
  }
}

function mapStateToProps (state) {
  const { currentUser } = state.Auth;

  return {
    currentUser,
  }
}

export default connect(mapStateToProps, null)(PublicRoutes);