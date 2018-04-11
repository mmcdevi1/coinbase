import * as userConstants from '../actions/types';

const initialState = {
  users: {}
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case userConstants.GET_USERS:
      return { 
        ...state, 
        users: action.payload 
      };
    default:
      return state;
  }
}

export default authReducer;