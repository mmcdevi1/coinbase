import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import LandingPage from './landing_page/LandingPage';
import { AUTH_USER } from '../actions/types';

class App extends React.Component {
  componentDidMount () {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.fetchUser();
    }
  }

  render () {
    return (
      <div className="app">
        <LandingPage />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUser: function () {
      axios.get('http://localhost:5000/api/current_user', {
        headers: { authorization: localStorage.getItem('token') }
      })
        .then(response => {
          dispatch({
            type: AUTH_USER,
            payload: response.data
          })
          // console.log(response.data)
        })
    }
  }
}

export default connect(null, mapDispatchToProps)(App);