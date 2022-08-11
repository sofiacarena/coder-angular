import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/students.module';

const STUDENTS_DATA: Student[] = [
  {
    firstName: "Mike",
    lastName: "Myers",
    email: "mike.myers@gmail.com",
    course: "Angular",
    grade: 7
  },
  {
    firstName: "Eddie",
    lastName: "Murphy",
    email: "emurphy@gmail.com",
    course: "Desarrollo Web",
    grade: 5
  },
  {
    firstName: "Cameron",
    lastName: "Díaz",
    email: "princesa.fiona@gmail.com",
    course: "Angular",
    grade: 10
  },
  {
    firstName: "John",
    lastName: "Lithgow",
    email: "thelord@gmail.com",
    course: "React",
    grade: 2
  },
  {
    firstName: "Conrad",
    lastName: "Vernon",
    email: "conocesapinpon@gmail.com",
    course: "Angular",
    grade: 9
  },
  {
    firstName: "Antonio",
    lastName: "Banderas",
    email: "boladepelos@gmail.com",
    course: "Desarrollo Web",
    grade: 8
  },
  {
    firstName: "Rupert",
    lastName: "Everett",
    email: "encantador.everett@gmail.com",
    course: "React",
    grade: 3
  },
]

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['fullname', 'email', 'course', 'grade', 'actions'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource(STUDENTS_DATA);
}
