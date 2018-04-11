import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as userConstants from '../actions/types';

class ProfilePage extends React.Component {
  componentDidMount () {
    this.props.getUser();
  }

  render () {
    const { user } = this.props;

    return (
      <div>
        Profile page of {user.username}
        <div>
          {user.firstName}
        </div>
      </div>
    ) 
  }
}

function mapStateToProps (state) {
  const { user } = state;
  return {
    user,
  }
}

function mapDispatchToProps (dispatch) {
  const arr = window.location.href.split('/');
  const params = arr[arr.length - 1];

  return {
    getUser: function () {
      axios.get(`http://localhost:5000/api/${params}`, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({
          type: userConstants.GET_USERS,
          payload: res.data.user
        })
      })
    }
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);