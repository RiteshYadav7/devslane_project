import { Reducer } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
} from "../actions/actions.constants";
import { Group } from "../models/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  loading: boolean;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byId: {},
  query: "",
  loading: false,
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY_CHANGED:
    const query = action.payload;

      return {
        ...state,
        query: query,
        // loadingQuery: { ...state.loadingQuery, [query]: true },
        loading: true,
      };
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];

      const groupIds = getIds(groups);

      // const groupMap = groups.reduce((prev, group) => {
      //   return { ...prev, [group.id]: group };
      // }, {});

      const newState = addMany(state, groups) as GroupState;

      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        // byId: { ...state.byId, ...groupMap },
        loading: false,
      };

    default:
      return state;
  }
};
