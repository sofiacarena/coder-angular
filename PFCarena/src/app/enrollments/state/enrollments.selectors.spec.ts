import * as fromEnrollments from './enrollments.reducer';
import { selectEnrollmentsState } from './enrollments.selectors';

describe('Enrollments Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEnrollmentsState({
      [fromEnrollments.enrollmentsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
