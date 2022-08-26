import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { STUDENTS_COLUMNS, STUDENTS_DATA } from '../models/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students = STUDENTS_DATA;
  columns = STUDENTS_COLUMNS;

  constructor() { }

  getStudents() {
    return from(this.students);
  }

  getStudentsTableColumns() {
    return of(this.columns);
  }
}
