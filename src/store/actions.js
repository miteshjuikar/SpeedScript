// actions.js
import { STORE_OBJECT } from './actionTypes';

export const storeObject = (object) => {
  return {
    type: STORE_OBJECT,
    payload: object
  };
};
