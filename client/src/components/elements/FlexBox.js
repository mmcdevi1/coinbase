import React from 'react';

class FlexBox extends React.Component {
  constructor () {
    super();

    this.state = {
      className: 'box'
    }
  }

  componentDidMount () {
    if (this.props.className) {
      this.setState({
        className: this.state.className + ' ' + this.props.className
      })
    }
  }

  render () {
    return (
      <div className={this.state.className}>
        {this.props.children} 
      </div>
    )
  }
}

export default FlexBox;