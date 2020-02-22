import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { InventoryActionTypes } from "./types";

import { fetchError, fetchSuccess } from "./action";
import inventory from "../../mockdata";
function* handleFetch() {
  try {
    const data = inventory;

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
  yield takeEvery(InventoryActionTypes.FETCH_REQUEST, handleFetch);
}

function* inventorySaga() {
  yield all([fork(watchFetchRequest)]);
}

export default inventorySaga;
