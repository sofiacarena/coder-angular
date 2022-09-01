import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, COURSES_COLUMNS } from '../models/courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  columns = COURSES_COLUMNS;
  readonly COURSES_URL = 'https://6310ece919eb631f9d6976a5.mockapi.io/api/courses/';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.COURSES_URL);
  }

  getCoursesTableColumns() {
    return of(this.columns);
  }

  addCourse(course: Course) {
    return this.http.post(this.COURSES_URL, course);
  }

  editCourse(course: Course) {
    return this.http.put(this.COURSES_URL + course.id, course);
  }

  deleteCourse(id: number) {
    return this.http.delete(this.COURSES_URL + id);
  }
}
