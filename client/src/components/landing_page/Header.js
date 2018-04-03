import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

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

  render () {
    return (
      <header style={{backgroundColor: this.state.background}} id="top" role="banner" className="navbar navbar-fixed-top bs-docs-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <img id="logo" src={this.renderLogo()} alt="DNA ID Logo" height={this.state.logoHeight} />
          </div>
          <nav className="navbar-collapse bs-navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
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

export default Header;