// actions.js
import { STORE_OBJECT, userDetailsObject } from './actionTypes';

export const storeObject = (object) => {
  return {
    type: STORE_OBJECT,
    payload: object
  };
};

export const setProduct = (product) => ({
  type: userDetailsObject,
  payload: product,
});
