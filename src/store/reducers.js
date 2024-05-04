// reducers.js
import { STORE_OBJECT } from './actionTypes';

const initialState = {
  myObject: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_OBJECT:
      return {
        ...state,
        myObject: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
