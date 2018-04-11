import authActions from '../actions/auth/actions';

const { AUTH_USER, UNAUTH_USER, AUTH_ERROR } = authActions;

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
    default:
      return state;
  }
}

export default authReducer;