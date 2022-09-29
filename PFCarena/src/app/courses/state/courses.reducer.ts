import { Action, createReducer, on } from '@ngrx/store';
import * as CoursesActions from './courses.actions';
import { Course } from '../../shared/models/courses.model';
import { CoursesState } from 'src/app/shared/models/courses.state';

export const coursesFeatureKey = 'courses';

export const initialState: CoursesState = {
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(CoursesActions.loadCourses, (state) => {
    return { ...state, loading: true }
  }),
  on(CoursesActions.loadedCourses, (state, { courses }) => {
    return { ...state, loading: false, courses: courses }
  }),
);
