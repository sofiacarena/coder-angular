import { ActionReducerMap } from "@ngrx/store";
import { Session } from "../shared/models/session.model";
import { sessionReducer } from "./reducers/session.reducer";

export interface AppState {
  session: Session
};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  session: sessionReducer
}
