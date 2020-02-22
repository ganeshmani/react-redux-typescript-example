import { Reducer } from "redux";

import { CartActionTypes, cartState } from "./types";
export const initialState: cartState = {
  data: {
    id: 0,
    items: []
  },
  errors: undefined,
  loading: false
};

const reducer: Reducer<cartState> = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.FETCH_CART_REQUEST: {
      return { ...state, loading: true };
    }
    case CartActionTypes.FETCH_CART_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case CartActionTypes.FETCH_CART_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    case CartActionTypes.ADD_TO_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,
          id: state.data.id,
          items: [...state.data.items, action.payload]
        }
      };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return {
        errors: state.errors,
        loading: state.loading,
        data: {
          ...state.data,
          id: state.data.id,
          items: state.data.items.filter(item => item !== action.payload.id)
        }
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as cartReducer };
