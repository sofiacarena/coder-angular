import { Action, createReducer, on } from '@ngrx/store';
import { StudentsState } from 'src/app/shared/models/students.state';
import * as StudentsActions from './students.actions';

export const studentsFeatureKey = 'students';

export const initialState: StudentsState = {
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(StudentsActions.loadStudents, (state) => {
    return { ...state, loading: true }
  }),
  on(StudentsActions.loadedStudents, (state, { students }) => {
    return { ...state, loading: false, students: students }
  }),
);
