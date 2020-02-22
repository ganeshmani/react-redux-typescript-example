import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { CartActionTypes } from "./types";

import { fetchError, fetchSuccess } from "./action";

export const getCart = (state: { cart: any }) => state.cart;

function* handleFetch() {
  try {
    const data = yield select(getCart);
    yield put(fetchSuccess(data));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError("An unknown error occurred."));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(CartActionTypes.FETCH_CART_REQUEST, handleFetch);
}

function* cartSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default cartSaga;
