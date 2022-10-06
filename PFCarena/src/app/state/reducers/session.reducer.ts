import { Action, createReducer, on } from '@ngrx/store';
import * as SessionActions from '../actions/session.actions';
import { Session } from 'src/app/shared/models/session.model';

export const sessionFeatureKey = 'session';

export const initialState: Session = {
  activeSession: false
};

export const sessionReducer = createReducer(
  initialState,
  on(SessionActions.loadSession, (state, {activeUser}) => {
    return { ...state, activeSession: true, activeUser: activeUser }
  }),
  on(SessionActions.closeSession, (state) => {
    return { ...state, activeSession: false, activeUser: undefined }
  })
);
