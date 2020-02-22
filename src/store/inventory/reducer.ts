import { Reducer } from "redux";
import { InventoryActionTypes, InventoryState } from "./types";

export const initialState: InventoryState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<InventoryState> = (state = initialState, action) => {
  switch (action.type) {
    case InventoryActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case InventoryActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case InventoryActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as InventoryReducer };
