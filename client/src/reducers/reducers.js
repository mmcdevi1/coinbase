import { reducer as reduxForm } from 'redux-form';
import Auth from './authReducer';
import User from './usersReducer';

export default {
  form: reduxForm,
  Auth,
  User,
}