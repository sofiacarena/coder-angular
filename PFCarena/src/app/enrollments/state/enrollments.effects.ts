import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as EnrollmentsActions from './enrollments.actions';
import { EnrollmentsService } from '../../shared/services/enrollments.service';
import { Enrollment } from '../../shared/models/enrollments.model';

@Injectable()
export class EnrollmentsEffects {
  loadEnrollments$ = createEffect(() => this.actions$.pipe(
    ofType(EnrollmentsActions.loadEnrollments),
    mergeMap(() => this.enrollmentsService.getEnrollments().pipe(
      map((e: Enrollment[]) => EnrollmentsActions.loadedEnrollments({enrollments: e}))
    ))
  ));

  constructor(private actions$: Actions, private enrollmentsService: EnrollmentsService) {}
}
