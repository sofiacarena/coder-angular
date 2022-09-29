import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentsState } from 'src/app/shared/models/students.state';
import * as fromStudents from './students.reducer';

export const selectStudentsState = createFeatureSelector<StudentsState>(
  fromStudents.studentsFeatureKey
);

export const selectLoadingStudentsState = createSelector(
  selectStudentsState,
  (state: StudentsState) => state.loading
);

export const selectLoadedStudentsState = createSelector(
  selectStudentsState,
  (state: StudentsState) => state.students
);
