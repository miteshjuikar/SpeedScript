// reducers.js
import { STORE_OBJECT, userDetailsObject } from './actionTypes';

const initialState = {
  myObject: {},
  product: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_OBJECT:
      return {
        ...state,
        myObject: action.payload
      };
      
      case userDetailsObject:
        return {
          ...state,
          product: action.payload,
        };

    default:
      return state;
  }
};

export default reducer;
