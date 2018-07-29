import React from 'react';

class Header extends React.Component {
  render () {
    let className;
    if (this.props.className) {
      className = this.props.className
    }

    return (
      <header className={className}>
        {this.props.children}
      </header>
    )
  }
}

export default Header;