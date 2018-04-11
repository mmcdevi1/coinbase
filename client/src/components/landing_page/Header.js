import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { connect } from 'react-redux';
import authActions from '../../actions/auth/actions';

const { logoutUser } = authActions;

class Header extends React.Component {
  renderLogo () {
    return process.env.PUBLIC_URL + "/images/DNA-ID-LOGO-white.png";
  }

  state = {
    background: '',
    logoHeight: 75
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

  renderLinks () {
    const { authenticated, logoutUser, currentUser } = this.props;

    if (authenticated) {
      return <li><a onClick={() => logoutUser()}>{currentUser.username} Logout</a></li>
    } else {
      return [
        <li key="1"><Link to="/login">Login</Link></li>,
        <li key="12"><Link to="/register">Register</Link></li>
      ]
    }
  }

  render () {
    const { background, logoHeight } = this.state;

    return (
      <header style={{backgroundColor: background}} id="top" role="banner" className="navbar navbar-fixed-top bs-docs-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <img id="logo" src={this.renderLogo()} alt="DNA ID Logo" height={logoHeight} />
          </div>
          <nav className="navbar-collapse bs-navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {this.renderLinks()}
              <li key="3"><Link to="/marketplace">marketplace</Link></li>
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