import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators';
import * as UsersActions from './users.actions';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from '../../shared/models/user.model';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.loadUsers),
    mergeMap(() => this.usersService.getUsers().pipe(
      map((u: User[]) => UsersActions.loadedUsers({users: u}))
    ))
  ));

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
