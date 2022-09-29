import { Action, createReducer, on } from '@ngrx/store';
import * as EnrollmentsActions from './enrollments.actions';
import { EnrollmentsState } from '../../shared/models/enrollments.state';

export const enrollmentsFeatureKey = 'enrollments';

export const initialState: EnrollmentsState = {
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(EnrollmentsActions.loadEnrollments, (state) => {
    return { ...state, loading: true }
  }),
  on(EnrollmentsActions.loadedEnrollments, (state, { enrollments }) => {
    return { ...state, loading: false, enrollments: enrollments }
  }),
);
