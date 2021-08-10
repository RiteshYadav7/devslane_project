import { groupsActions } from "../actions/groups.actions.";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";
import { groupQueryLoadingSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const queryLoading = groupQueryLoadingSelector(store.getState());

  const query = request.query;
  const loading = queryLoading[query];

  groupsActions.query(query);

  if (loading) {
    return;
  }

  fetchGroupsAPI(request).then((groups) => {
    groupsActions.queryCompleted(query, groups);
  });
};
