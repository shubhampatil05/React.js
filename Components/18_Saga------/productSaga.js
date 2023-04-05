import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getProductSuccess } from "./productSlice";

function* getFetch() {
  const response = yield call(() => fetch("https://fakestoreapi.com/products"));

  const data = yield response.json();
  console.log(data);

  yield put(getProductSuccess(data));
}

function* productSaga() {
  yield takeEvery("products/getfetchProducts", getFetch);
}

export { productSaga };
