import * as fromStudents from './students.reducer';
import { selectStudentsState } from './students.selectors';

describe('Students Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStudentsState({
      [fromStudents.studentsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
