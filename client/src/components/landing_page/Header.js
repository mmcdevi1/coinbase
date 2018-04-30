import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { connect } from 'react-redux';
import authActions from '../../actions/auth';
import Logo from '../utilities/logo';

const { logoutUser } = authActions;

class Header extends React.Component {
  state = {
    background: '',
    logoHeight: 75,

  };

  componentDidMount () {
    // This changes the header background after scrolling and shrinks the logo
    document.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        this.setState({ background: 'rgba(24,28,31,0.85)', logoHeight: 42 })
      } else {
        this.setState({ background: '', logoHeight: 75 })
      }
    });
  }

  renderAdminLinks () {
    const { currentUser } = this.props;

    if (currentUser.admin) {
      return [
        <li key="1"><a onClick={() => logoutUser()}>Admin</a></li>
      ]
    } 
  }

  renderLinks () {
    const { authenticated, logoutUser, currentUser } = this.props;

    if (process.env.NODE_ENV === 'development') {
      if (authenticated) {
        return <li><a onClick={() => logoutUser()}>{currentUser.username} Logout</a></li>;
      } else {
        return [
          <li key="1"><Link to="/login">Login</Link></li>,
          <li key="2"><Link to="/register">Register</Link></li>,
          <li key="3"><Link to="/marketplace">marketplace</Link></li>
        ]
      }      
    }

  }

  render () {
    const { background, logoHeight } = this.state;

    return (
      <header style={{backgroundColor: background}} id="top" role="banner" className="navbar navbar-fixed-top bs-docs-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <Logo height={logoHeight} />
          </div>
          <nav className="navbar-collapse bs-navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {this.renderAdminLinks()}
              {this.renderLinks()}
              <li><AnchorLink href="#how-it-works">How it Works</AnchorLink></li>
              <li><AnchorLink href="#about-us">About Us</AnchorLink></li>
              <li><AnchorLink href="#team">Team</AnchorLink></li>
              <li><AnchorLink href="#contact_form" className="btn btn-success btn-lg">Join In</AnchorLink></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

function mapStateToProps (state) {
  const { authenticated, currentUser } = state.Auth;

  return {
    authenticated,
    currentUser
  }
}

export default connect(mapStateToProps, { logoutUser })(Header);