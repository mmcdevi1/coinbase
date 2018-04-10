import * as userConstants from '../actions/types';

const initialState = {
  error: '',
  authenticated: localStorage.getItem('token') ? true : false,
  currentUser: {}
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case userConstants.AUTH_USER:
      return { 
        ...state, 
        error: '', 
        authenticated: true, 
        currentUser: action.payload 
      };
    case userConstants.AUTH_ERROR:
      return { 
        ...state, 
        error: action.payload 
      };
    case userConstants.UNAUTH_USER:
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