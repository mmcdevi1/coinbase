import axios from 'axios';

const authActions = {
  AUTH_USER: 'AUTH_USER',
  UNAUTH_USER: 'UNAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',

  authError: (error) => {
    return {
      type: authActions.AUTH_ERROR,
      payload: error
    }
  },

  signinUser: ({ username, password }, history) => {
    return (dispatch) => {
      axios.post('http://localhost:5000/login', { username, password })
      .then(res => {
        dispatch({ 
          type: authActions.AUTH_USER, 
          payload: res.data.user 
        });

        localStorage.setItem('token', res.data.token);

        // Redirect
        history.push('/')
      })
      .catch(e => dispatch(authActions.authError('Invalid email or password. Please try again')))
    }
  },

  logoutUser: () => {
    return (dispatch) => {
      localStorage.removeItem('token');

      dispatch({
        type: authActions.UNAUTH_USER
      })
    }
  },

  registerUser: function ({ firstName, lastName, username, email, password, passwordConfirm }, history) {
    return (dispatch) => {
      axios.post('http://localhost:5000/register', { firstName, lastName, username, email, password, passwordConfirm })
      .then(res => {
        console.log(res)
        dispatch({ type: authActions.AUTH_USER, payload: res.data.user })
        localStorage.setItem('token', res.data.token)

        // Redirect
        history.push('/')
      })
      .catch(e => dispatch(authActions.authError(e.res.data.error)))
    }
  }
}

export default authActions;