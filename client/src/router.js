import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing_page/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import AuthenticateUser from './components/auth/Authentication';
import Marketplace from './components/Marketplace'
import ProfilePage from './components/ProfilePage';

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />                    
        <Route path="/logout" component={Logout} />            
        <Route path="/marketplace" component={AuthenticateUser(Marketplace)} />
        <Route path="/:username" component={AuthenticateUser(ProfilePage)} />
      </Switch>
    </BrowserRouter>
  )
}

export default PublicRoutes;