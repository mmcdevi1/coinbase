import React from 'react';

class Center extends React.Component {
  render () {
    return (
      <div className="container main-image">
        <div id="wrapper">
          <div id="page" className="form-width">
            <div id="content_container">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Center;