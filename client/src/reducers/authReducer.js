import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

const initialState = {
  error: '',
  authenticated: false,
  currentUser: {}
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true, currentUser: action.payload };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
}

export default authReducer;