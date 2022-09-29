import * as fromCourses from './courses.reducer';
import { selectCoursesState } from './courses.selectors';

describe('Courses Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCoursesState({
      [fromCourses.coursesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
