import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landing_page/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import AuthenticateUser from './components/auth/Authentication';
import Marketplace from './components/Marketplace'
import ProfilePage from './components/ProfilePage';
import Dashboard from './components/Dashboard';
import WizardForm from './components/wizard';
import Product from './components/product/Product';
import Cart from './containers/Cart';

import actions from './actions/cart/actions';

const { setCart, setCartItems } = actions;

class PublicRoutes extends React.Component {
  componentDidMount () {
    const { 
      setCart, 
      currentUser, 
    } = this.props;

    setCart(currentUser)
  }

  componentWillReceiveProps (nextProps) {
    const { setCartItems } = this.props;

    if (nextProps.cartId !== this.props.cartId) {
      setCartItems(nextProps.cartId)
    }
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"      component={LandingPage} />
          <Route path="/register"    component={Register} />
          <Route path="/login"       component={Login} />                    
          <Route path="/logout"      component={Logout} />  
          <Route exact path="/kit"   component={Product} />
          <Route path="/cart"        component={AuthenticateUser(Cart)} />
          <Route path="/kit/request" component={AuthenticateUser(WizardForm)} />
          <Route path="/marketplace" component={AuthenticateUser(Marketplace)} />
          <Route path="/dashboard"   component={AuthenticateUser(Dashboard)} />
          <Route path="/:username"   component={AuthenticateUser(ProfilePage)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

function mapStateToProps (state) {
  const { currentUser } = state.Auth;
  const { cartId } = state.Cart;

  return {
    currentUser,
    cartId,
  }
}

export default connect(mapStateToProps, { setCart, setCartItems })(PublicRoutes);