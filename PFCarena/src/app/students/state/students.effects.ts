import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as StudentsActions from './students.actions';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Student } from 'src/app/shared/models/students.model';

@Injectable()
export class StudentsEffects {
  loadStudents$ = createEffect(() => this.actions$.pipe(
    ofType(StudentsActions.loadStudents),
    mergeMap(() => this.studentsService.getStudents().pipe(
      map((s: Student[]) => StudentsActions.loadedStudents({students: s}))
    ))
  ));

  constructor(private actions$: Actions, private studentsService: StudentsService) {}
}
