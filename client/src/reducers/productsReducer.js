import actions from '../actions/products/actions';

const { FETCH_PRODUCTS } = actions;

const initialState = {
  products: [
    { id: 1, name: 'DNA Kit', price: 0, inStock: 100 },
  ]
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state;
    default:
      return state;
  }
}

export default authReducer;