import { call, put, takeEvery } from "@redux-saga/core/effects"; // call() is used to call an API,put() is used to put an API in a function, and takeEvery() is action where the data getting fetched..
import { getCatsSuccess } from "./catSlice";

function* workGetCatsFetch() {
  const res = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const data = yield res.json();
  const finalData = data.slice(0, 10);
  yield put(getCatsSuccess(finalData));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export { catSaga };
