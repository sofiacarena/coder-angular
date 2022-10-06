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
import { StudentsDetailsComponent } from '../students-details/students-details.component';
import { AppState } from 'src/app/state/app.state';
import { selectAdminUserState } from 'src/app/state/selectors/session.selectors';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  adminUser$: Observable<boolean | undefined>;
  displayedColumns$!: Observable<string[]>;
  loading$!: Observable<boolean>;
  dataSource!: MatTableDataSource<Student>;

  constructor(
    private store: Store<StudentsState>,
    private sessionStore: Store<AppState>,
    private dialog: MatDialog,
    private studentsService: StudentsService,
  ) {
    this.adminUser$ = this.sessionStore.select(selectAdminUserState);
  }

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

  seeStudentDetails(element: Student){
    const dialogRef = this.dialog.open(StudentsDetailsComponent, {
      width: '650px',
      data: element.id
    });

    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(loadStudents());
    });
  }

  deleteStudent(element: Student){
    this.studentsService.deleteStudent(element.id).subscribe(() => {
      this.store.dispatch(loadStudents());
    });
  }
}
