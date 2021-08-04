import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";

// export interface AppState {
//   auth: AuthState;
//   users: UserState;
//   groups: GroupState;
// }


const reducer = combineReducers({
  users: userReducer,
  groups: groupReducer,
  auth: authReducer
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
