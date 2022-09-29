import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators';
import * as CoursesActions from './courses.actions';
import { Course } from '../../shared/models/courses.model';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() => this.actions$.pipe(
    ofType(CoursesActions.loadCourses),
    mergeMap(() => this.coursesService.getCourses().pipe(
      map((c: Course[]) => CoursesActions.loadedCourses({courses: c}))
    ))
  ));

  constructor(private actions$: Actions, private coursesService: CoursesService) {}
}
