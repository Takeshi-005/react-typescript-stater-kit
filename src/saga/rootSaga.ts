import { all, fork } from "redux-saga/effects";
import saga from "./api";

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([fork(saga)]);
}
