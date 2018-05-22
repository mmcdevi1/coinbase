// import axios from 'axios';
// import actions from '../actions/cart/actions';
// import store from '../reducers/store';
// import currentUser from './currentUser';

// const { SET_CART, SET_ITEMS } = actions;

// let cart;

// function setCart (currentUser) {
//   axios
//     .post('/api/cart/new', { userId: currentUser.id }, {
//       headers: { authorization: localStorage.getItem('token') }
//     })
//     .then(res => {
//       console.log(res)
//       // localStorage.setItem('cart', res.data[0].id)
//       store.dispatch({
//         type: SET_CART,
//         payload: res.data[0].id
//       })

//       cart = res.data[0].id
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

// function setCartItems (cartId) {
//   axios
//     .get('/api/cart/items', {
//       params: { cartId: cartId },
//       headers: { authorization: localStorage.getItem('token') }
//     })
//     .then(res => {
//       store.dispatch({
//         type: SET_ITEMS,
//         payload: res.data,
//       })
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
  
// setCart(currentUser)
// setCartItems(cart)

// export default setCart;