import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import userReducer from './usersReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  user: userReducer,
})