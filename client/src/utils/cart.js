import axios from 'axios';
import actions from '../actions/cart/actions';
import store from '../reducers/store';
import currentUser from './currentUser';

const { SET_CART } = actions;

function setCart (currentUser) {
  axios
    .post('/api/cart/new', { userId: currentUser.id }, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log(res)
      // localStorage.setItem('cart', res.data[0].id)
      store.dispatch({
        type: SET_CART,
        payload: res.data[0].id
      })
    })
    .catch(err => {
      console.log(err)
    })
}

setCart(currentUser)

export default setCart;