import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ProfilePage extends React.Component {
  render () {
    return (
      <div>
        Profile page
      </div>
    ) 
  }
}

export default connect(null)(ProfilePage);