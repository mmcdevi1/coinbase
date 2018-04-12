import userActions from '../actions/user';

const { GET_USERS } = userActions;

const userReducer = (state={}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;