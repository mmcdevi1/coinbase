import React from 'react';

class Logo extends React.Component {
  renderLogo () {
    return `${process.env.PUBLIC_URL}/images/DNA-ID-LOGO-white.png`;
  }

  render () {
    return (
      <img 
        id="logo" 
        src={this.renderLogo()} 
        alt="DNA ID Logo" 
        height={this.props.height} 
      />
    )
  }
}

export default Logo