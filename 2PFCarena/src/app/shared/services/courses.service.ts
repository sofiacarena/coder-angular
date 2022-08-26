import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { COURSES_COLUMNS, COURSES_DATA } from '../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = COURSES_DATA;
  columns = COURSES_COLUMNS;

  constructor() { }

  getCourses() {
    return from(this.courses);
  }

  getCoursesTableColumns() {
    return of(this.columns);
  }
}
