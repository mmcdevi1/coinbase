import React from 'react';

class Column extends React.Component {
  render () {
    const { width, bgColor } = this.props;

    return (
      <div className={`column ${width} ${bgColor}`}>
        {this.props.children} 
      </div>
    )
  }
}

export default Column;