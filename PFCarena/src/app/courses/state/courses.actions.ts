import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/shared/models/courses.model';

export const loadCourses = createAction(
  '[Courses] Load Courses'
);

export const loadedCourses = createAction(
  '[Courses] Loaded Courses',
  props<{ courses: Course[] }>()
);
