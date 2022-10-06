import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export const loadUsers = createAction(
  '[Users] Load Users'
);

export const loadedUsers = createAction(
  '[Users] Loaded Users',
  props<{ users: User[] }>()
);
