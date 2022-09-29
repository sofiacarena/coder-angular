import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/students.model';
import { StudentsFormComponent } from '../students-form/students-form.component';
import { StudentsService } from '../../../shared/services/students.service';
import { StudentsState } from 'src/app/shared/models/students.state';
import { Store } from '@ngrx/store';
import { selectLoadingStudentsState, selectLoadedStudentsState } from '../../state/students.selectors';
import { loadStudents } from '../../state/students.actions';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  displayedColumns$!: Observable<string[]>;
  loading$!: Observable<boolean>;
  dataSource!: MatTableDataSource<Student>;

  constructor(
    private store: Store<StudentsState>,
    private dialog: MatDialog,
    private studentsService: StudentsService,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
    this.loading$ = this.store.select(selectLoadingStudentsState);
    this.store.select(selectLoadedStudentsState).subscribe((students) => {
      this.dataSource = new MatTableDataSource(students);
    })
    this.displayedColumns$ = this.studentsService.getStudentsTableColumns();
  }

  @ViewChild(MatTable) studentsTable!: MatTable<Student>;

  addStudent(){
    const dialogRef = this.dialog.open(StudentsFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.studentsService.addStudent(res).subscribe(
          () => { this.store.dispatch(loadStudents()); }
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
          () => { this.store.dispatch(loadStudents()); }
        );
      }
    })
  }

  deleteStudent(element: Student){
    this.studentsService.deleteStudent(element.id).subscribe(() => {
      this.store.dispatch(loadStudents());
    });
  }
}
