import { all, fork } from 'redux-saga/effects';
import zipcode from './zipcode';

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([fork(zipcode)]);
}
