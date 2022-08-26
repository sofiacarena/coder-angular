import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { take, Observable, Subscription } from 'rxjs';
import { Student } from 'src/app/shared/models/students.model';
import { StudentsFormComponent } from '../students-form/students-form.component';
import { StudentsService } from '../../../shared/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {
  displayedColumns$!: Observable<string[]>;
  students: Student[] = [];
  subscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.studentsService.getStudents()
      .subscribe((student) => {
        this.students.push(student);
      });
    this.displayedColumns$ = this.studentsService.getStudentsTableColumns();
  }

  dataSource: MatTableDataSource<Student> = new MatTableDataSource(this.students);
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
        const item = this.dataSource.data.find(student => student.id === res.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = res;
        this.studentsTable.renderRows();
      }
    })
  }

  deleteStudent(element: Student){
    this.dataSource.data = this.dataSource.data.filter((student: Student) => student.id != element.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
