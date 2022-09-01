import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
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
    this.getStudents();
    this.displayedColumns$ = this.studentsService.getStudentsTableColumns();
  }

  dataSource = new MatTableDataSource<Student>();
  @ViewChild(MatTable) studentsTable!: MatTable<Student>;

  getStudents() {
    this.subscription = this.studentsService.getStudents()
      .subscribe((students) => {
        this.dataSource.data = students;
      });
  }

  addStudent(){
    const dialogRef = this.dialog.open(StudentsFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.studentsService.addStudent(res).subscribe(
          () => {this.getStudents()}
        );
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
        this.studentsService.editStudent(res).subscribe(
          () => {this.getStudents()}
        );
      }
    })
  }

  deleteStudent(element: Student){
    this.studentsService.deleteStudent(element.id).subscribe(() => {
      this.getStudents();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
