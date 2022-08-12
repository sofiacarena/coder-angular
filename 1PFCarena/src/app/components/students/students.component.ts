import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Student, STUDENTS_DATA } from 'src/app/models/students.model';
import { StudentsFormComponent } from './students-form/students-form.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['fullname', 'email', 'course', 'grade', 'actions'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource(STUDENTS_DATA);
  @ViewChild(MatTable) studentsTable!: MatTable<Student>;

  addStudent(){
    const dialogRef = this.dialog.open(StudentsFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.dataSource.data.push(res);
        this.studentsTable.renderRows();
      }
    })
  }

  editStudent(element: Student){
    const dialogRef = this.dialog.open(StudentsFormComponent, {
      width: '700px',
      data: element
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        const item = this.dataSource.data.find(student => student.email === res.email);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = res;
        this.studentsTable.renderRows();
      }
    })
  }

  deleteStudent(element: Student){
    this.dataSource.data = this.dataSource.data.filter((student: Student) => student.email != element.email);
  }
}
