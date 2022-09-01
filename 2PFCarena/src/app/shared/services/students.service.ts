import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Student, STUDENTS_COLUMNS } from '../models/students.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  columns = STUDENTS_COLUMNS;
  readonly STUDENTS_URL = 'https://6310ece919eb631f9d6976a5.mockapi.io/api/students/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.STUDENTS_URL);
  }

  getStudentsTableColumns() {
    return of(this.columns);
  }

  addStudent(student: Student) {
    return this.http.post(this.STUDENTS_URL, student);
  }

  editStudent(student: Student) {
    return this.http.put(this.STUDENTS_URL + student.id, student);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.STUDENTS_URL + id);
  }
}
