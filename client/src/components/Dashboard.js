import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import authActions from '../actions/auth'

const { updateUser } = authActions; 

class Dashboard extends React.Component {
  render () {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Dashboard</h3>
        <button onClick={() => this.props.updateUser({ contributor: true })}>Yes</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    currentUser: state.Auth.currentUser
  }
}

export default connect(mapStateToProps, { updateUser })(Dashboard);