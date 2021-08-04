import { Reducer } from "redux"
import { ME_FETCH, ME_LOGIN } from "../actions/auth.actions."

export interface AuthState {
  id?: number;
}

const intialState = {}

export const authReducer: Reducer<AuthState> = (state = intialState, action) => {
    switch (action.type){
        case ME_LOGIN:
        case ME_FETCH:
            const userId = action.payload.id as number;
            return {...state, id: userId};
        default:
            return state;
    }
};