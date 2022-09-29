import { Course } from './courses.model';

export interface CoursesState {
  loading: boolean;
  courses?: Course[];
}
