import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from 'src/app/shared/models/users.state';
import * as fromUsers from './users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>(
  fromUsers.usersFeatureKey
);

export const selectLoadingUsersState = createSelector(
  selectUsersState,
  (state: UsersState) => state.loading
);

export const selectLoadedUsersState = createSelector(
  selectUsersState,
  (state: UsersState) => state.users
);
