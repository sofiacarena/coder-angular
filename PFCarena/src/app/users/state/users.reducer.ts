import { Action, createReducer, on } from '@ngrx/store';
import { UsersState } from 'src/app/shared/models/users.state';
import * as UsersActions from './users.actions';

export const usersFeatureKey = 'users';

export const initialState: UsersState = {
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(UsersActions.loadUsers, (state) => {
    return { ...state, loading: true }
  }),
  on(UsersActions.loadedUsers, (state, { users }) => {
    return { ...state, loading: false, users: users }
  }),
);
