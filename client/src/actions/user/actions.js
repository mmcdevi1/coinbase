import axios from 'axios';

const arr = window.location.href.split('/');
const params = arr[arr.length - 1];

const userActions = {
  GET_USERS: 'GET_USERS',

  getUser: function () {
    return (dispatch) => {
      axios.get(`/api/auth/${params}`, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({
          type: userActions.GET_USERS,
          payload: res.data.user
        })
      })
    }
  }
}

export default userActions;