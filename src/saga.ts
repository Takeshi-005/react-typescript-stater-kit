import { all, call, put, takeLatest } from "redux-saga/effects";

import * as Action from "../Constants";
import { getAction } from "../actions/Actions";
import { getApi } from "../api/api";

function* runGerSearchItems(action: ReturnType<typeof getAction.start>) {
  const { params } = action.payload
  try {
    const api = getApi();
    const result = yield call(api, params);

    yield put(getAction.succeed(result));
  } catch (error) {
    yield put(getAction.fail(error));
  }
}

export default function* root() {
  yield all([takeLatest(Action.GET_ACTION_START, runGerSearchItems)]);
}
