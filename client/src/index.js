// import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import axios from 'axios';
import * as actions from './actions/types';
import logger from 'redux-logger';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk, logger));

const token = localStorage.getItem('token');

if (token) {
  fetchUser();  
}

function fetchUser () {
  axios.get('http://localhost:5000/api/current_user', {
    headers: { authorization: localStorage.getItem('token') }
  })
    .then(response => {
      store.dispatch({
        type: actions.AUTH_USER,
        payload: response.data
      })
    })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);