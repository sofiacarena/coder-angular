import { createAction, props } from '@ngrx/store';
import { Enrollment } from '../../shared/models/enrollments.model';

export const loadEnrollments = createAction(
  '[Enrollments] Load Enrollments'
);

export const loadedEnrollments = createAction(
  '[Enrollments] Loaded Enrollments',
  props<{ enrollments: Enrollment[] }>()
);
