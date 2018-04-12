import authActions from '../actions/auth';

const { AUTH_USER, UNAUTH_USER, AUTH_ERROR, UPDATE_USER } = authActions;

const initialState = {
  errorMessage: '',
  authenticated: localStorage.getItem('token') ? true : false,
  currentUser: {}
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { 
        ...state, 
        errorMessage: '', 
        authenticated: true, 
        currentUser: action.payload 
      };
    case AUTH_ERROR:
      return { 
        ...state, 
        errorMessage: action.payload 
      };
    case UNAUTH_USER:
      return { 
        ...state, 
        authenticated: false,
        currentUser: {} 
      };
    case UPDATE_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;