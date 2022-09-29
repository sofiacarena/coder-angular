import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentsState } from 'src/app/shared/models/enrollments.state';
import * as fromEnrollments from './enrollments.reducer';

export const selectEnrollmentsState = createFeatureSelector<EnrollmentsState>(
  fromEnrollments.enrollmentsFeatureKey
);

export const selectLoadingEnrollmentsState = createSelector(
  selectEnrollmentsState,
  (state: EnrollmentsState) => state.loading
);

export const selectLoadedEnrollmentsState = createSelector(
  selectEnrollmentsState,
  (state: EnrollmentsState) => state.enrollments
);
