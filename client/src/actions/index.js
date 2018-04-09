// import axios from 'axios';
import * as actions from './types';

export function authError (error) {
  return {
    type: actions.AUTH_ERROR,
    payload: error
  }
}

