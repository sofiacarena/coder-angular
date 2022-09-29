import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from 'src/app/shared/models/courses.state';
import * as fromCourses from './courses.reducer';

export const selectCoursesState = createFeatureSelector<CoursesState>(
  fromCourses.coursesFeatureKey
);

export const selectLoadingCoursesState = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.loading
);

export const selectLoadedCoursesState = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.courses
);
