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

  getStudentsById(id: number) {
    return new Promise((resolve, reject) => {
      let student = this.students.find(student => student.id === id);
      if(student){
        resolve(student);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No se encontró el estudiante con el id provisto'
        });
      }
    });
  }
}
