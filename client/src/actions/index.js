import axios from 'axios';
import * as actions from './types';

export function authError (error) {
  return {
    type: actions.AUTH_ERROR,
    payload: error
  }
}

export const fetchUser = () => {
  return function (dispatch) {
   axios.get('http://localhost:5000/api/current_user', {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
      dispatch({
        type: actions.AUTH_USER,
        payload: response.data
      })
      // console.log(response.data)
    })
  }
}