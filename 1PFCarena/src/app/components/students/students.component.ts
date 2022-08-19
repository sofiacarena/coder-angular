import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { map, Observable, Subscription } from 'rxjs';
import { Student, TableStudent } from 'src/app/models/students.model';
import { StudentsFormComponent } from './students-form/students-form.component';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {
  displayedColumns$!: Observable<string[]>;
  students: TableStudent[] = [];
  subscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.studentsService.getStudents()
      .pipe(
        map(student => ({
          id: student.id,
          fullname: `${student.firstName} ${student.lastName.toUpperCase()}`,
          email: student.email,
          course: student.course,
          grade: student.grade,
        }))
      )
      .subscribe((student) => {
        this.students.push(student);
      })
    this.displayedColumns$ = this.studentsService.getStudentsTableColumns();
  }

  dataSource: MatTableDataSource<TableStudent> = new MatTableDataSource(this.students);
  @ViewChild(MatTable) studentsTable!: MatTable<TableStudent>;

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

  editStudent(id: number){
    const dialogRef = this.dialog.open(StudentsFormComponent, {
      width: '700px',
      data: id
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        const item = this.dataSource.data.find(student => student.id === res.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = res;
        this.studentsTable.renderRows();
      }
    })
  }

  deleteStudent(element: TableStudent){
    this.dataSource.data = this.dataSource.data.filter((student: TableStudent) => student.email != element.email);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
