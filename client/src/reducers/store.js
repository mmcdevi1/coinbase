import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducerList from './reducers';

const middlewares = [reduxThunk, logger];
const reducers = combineReducers({
  ...reducerList
})

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

export default store;