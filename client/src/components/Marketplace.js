import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import { AUTH_USER } from '../actions/types';

class Marketplace extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className="app">
        Marketplace
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   const { authenticated, currentUser } = this.Auth;

//   return {
//     auth: state.auth.authenticated,
//     currentUser: state.auth.currentUser
//   }
// }

export default connect(null)(Marketplace);