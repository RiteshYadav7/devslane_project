import { takeEvery, takeLatest, debounce, call, put, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY_CHANGED } from "../actions/actions.constants";
import { queryCompletedAction } from "../actions/groups.actions.";
import { fetchGroups as fetchGroupsApi } from "../api/groups";

export function* fetchGroups(action: AnyAction): Generator<any> {

  yield delay(1000);

  const groupRes: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(queryCompletedAction(action.payload, groupRes.data.data));
}

export function* watchGroupQueryChanged() {
  // yield debounce(1000, GROUPS_QUERY_CHANGED, fetchGroups);
  yield takeLatest(GROUPS_QUERY_CHANGED, fetchGroups);
}
