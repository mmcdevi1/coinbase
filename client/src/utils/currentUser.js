import axios from 'axios';
import authActions from '../actions/auth';
import store from '../reducers/store';

const { AUTH_USER } = authActions;

const token = localStorage.getItem('token');

if (token) {
  fetchUser();  
}

function fetchUser () {
  axios.get('/api/current_user', {
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