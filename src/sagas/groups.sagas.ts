import { takeEvery, call, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY_CHANGED } from "../actions/actions.constants";
import { queryCompletedAction } from "../actions/groups.actions.";
import {fetchGroups as fetchGroupsApi} from "../api/groups";

export function* fetchGroups(action: AnyAction): Generator<any> {
  const output: any = yield call(fetchGroupsApi, {
      query: action.payload,
      status: "all-groups",
  });

  yield put(queryCompletedAction(action.payload, output));
};

export function* watchGroupQueryChanged() {
  yield takeEvery(GROUPS_QUERY_CHANGED, fetchGroups);
}
