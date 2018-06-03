import axios from 'axios';

const authActions = {
  AUTH_USER: 'AUTH_USER',
  UNAUTH_USER: 'UNAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  UPDATE_USER: 'UPDATE_USER',

  authError: (error) => {
    return {
      type: authActions.AUTH_ERROR,
      payload: error
    }
  },

  signinUser: ({ username, password }, history) => {
    return (dispatch) => {
      axios.post('/api/auth/login', { username, password })
      .then(res => {
        console.log(res)
        dispatch({ 
          type: authActions.AUTH_USER, 
          payload: res.data.user 
        });

        localStorage.setItem('token', res.data.token);

        // Redirect
        history.push('/dashboard')
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
      axios.post('/api/auth/register', { firstName, lastName, username, email, password, passwordConfirm })
      .then(res => {
        console.log(res)
        dispatch({ type: authActions.AUTH_USER, payload: res.data.user })
        localStorage.setItem('token', res.data.token)

        // Redirect
        history.push('/kit/request')
      })
      .catch( e => dispatch( authActions.authError( 'Error: This user already exists!' ) ) )
    }
  },

  updateUser: function (body) {
    return (dispatch) => {
      axios.put('/api/auth/update_current_user', body, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({
          type: authActions.UPDATE_USER,
          payload: res.data.user
        })
      })
    }
  }      

}

export default authActions;