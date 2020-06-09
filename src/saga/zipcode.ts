import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET_ZIP_CODE } from '../actions/zipcodeConstants';
import { getZipcode } from '../actions/zipcode';
import { getApi } from '../api/api';

function* runGerSearchItems(action: ReturnType<typeof getZipcode.start>) {
  const { zipcode } = action.payload;
  try {
    const api = getApi();
    const result = yield call(api, zipcode);

    yield put(getZipcode.succeed({ zipcode }, result));
  } catch (error) {
    yield put(getZipcode.fail(error));
  }
}

export default function* root() {
  yield all([takeLatest(GET_ZIP_CODE.START, runGerSearchItems)]);
}
