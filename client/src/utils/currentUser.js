import axios from 'axios';
import authActions from '../actions/auth/actions';
import store from '../reducers/store';

const { AUTH_USER } = authActions;

const token = localStorage.getItem('token');

if (token) {
  fetchUser();  
}

function fetchUser () {
  axios.get('http://localhost:5000/api/current_user', {
    headers: { authorization: localStorage.getItem('token') }
  })
    .then(response => {
      store.dispatch({
        type: AUTH_USER,
        payload: response.data
      })
    })
}

export default fetchUser;