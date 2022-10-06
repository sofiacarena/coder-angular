import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export const loadSession = createAction(
  '[Session] Load Session',
  props<{ activeUser: User }>()
);

export const closeSession = createAction(
  '[Session] Close Session'
);
