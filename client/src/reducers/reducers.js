import { reducer as reduxForm } from 'redux-form';
import Auth from './authReducer';
import User from './usersReducer';
import Cart from './cartReducer';
import Products from './productsReducer';
import Orders from './ordersReducer';

export default {
  form: reduxForm,
  Auth,
  User,
  Cart,
  Products,
  Orders,
}