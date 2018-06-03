import axios from 'axios';
import authActions from '../actions/auth';
import store from '../reducers/store';

const { AUTH_USER } = authActions;

const token = localStorage.getItem('token');

if (token) {
  console.log('token exists')
  fetchUser();  
}

function fetchUser () {
  axios.get('/api/auth/current_user', {
    headers: { authorization: localStorage.getItem('token') }
  })
    .then(response => {
      // console.log(response)
      store.dispatch({
        type: AUTH_USER,
        payload: response.data
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export default fetchUser;