const actions = {
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',

  getUser: function () {
    return dispatch => {

      dispatch({
        type: actions.FETCH_PRODUCTS,
        payload: 'res.data.user'
      })

    }
  }
}

export default actions;