import { createAction, props } from '@ngrx/store';
import { Student } from '../../shared/models/students.model';

export const loadStudents = createAction(
  '[Students] Load Students'
);

export const loadedStudents = createAction(
  '[Students] Loaded Students',
  props<{ students: Student[] }>()
);
