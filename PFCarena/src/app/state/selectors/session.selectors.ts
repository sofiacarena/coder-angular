import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSession from '../reducers/session.reducer';
import { AppState } from '../app.state';
import { Session } from 'src/app/shared/models/session.model';

export const selectSessionState = (state: AppState) => state.session;

export const selectActiveSessionState = createSelector(
  selectSessionState,
  (state: Session) => state.activeSession
);

export const selectActiveUserState = createSelector(
  selectSessionState,
  (state: Session) => state.activeUser
);

export const selectAdminUserState = createSelector(
  selectSessionState,
  (state: Session) => state.activeUser?.admin
);
