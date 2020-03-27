import { all, call, put, takeLatest } from "redux-saga/effects";

import { ActionTypes, actionApi } from "../actions/api";
import { api as getApi} from '../api'

function* fetch(action: ReturnType<typeof actionApi.start>) {
  // const { params } = action.payload;
  try {
    const api = getApi();
    const result = yield call(api, {});

    yield put(actionApi.succeed(result));
  } catch (error) {
    yield put(actionApi.fail(error));
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.START , fetch)]);
}
