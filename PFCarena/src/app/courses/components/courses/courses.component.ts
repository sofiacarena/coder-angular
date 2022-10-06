import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models/courses.model';
import { CoursesState } from 'src/app/shared/models/courses.state';
import { CoursesService } from '../../../shared/services/courses.service';
import { selectLoadedCoursesState, selectLoadingCoursesState } from '../../state/courses.selectors';
import { CoursesFormComponent } from '../courses-form/courses-form.component';
import { loadCourses } from '../../state/courses.actions';
import { CoursesDetailsComponent } from '../courses-details/courses-details.component';
import { AppState } from 'src/app/state/app.state';
import { selectAdminUserState } from 'src/app/state/selectors/session.selectors';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  adminUser$: Observable<boolean | undefined>;
  loading$!: Observable<boolean>;
  displayedColumns$!: Observable<string[]>;
  dataSource!: MatTableDataSource<Course>;

  constructor(
    private store: Store<CoursesState>,
    private sessionStore: Store<AppState>,
    private dialog: MatDialog,
    private coursesService: CoursesService,
  ) {
    this.adminUser$ = this.sessionStore.select(selectAdminUserState);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.loading$ = this.store.select(selectLoadingCoursesState);
    this.store.select(selectLoadedCoursesState).subscribe((courses) => {
      this.dataSource = new MatTableDataSource(courses);
    });
    this.displayedColumns$ = this.coursesService.getCoursesTableColumns();
  }

  @ViewChild(MatTable) coursesTable!: MatTable<Course>;

  addCourse(){
    const dialogRef = this.dialog.open(CoursesFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.coursesService.addCourse(res).subscribe(
          () => { this.store.dispatch(loadCourses()) }
        );
      }
    })
  }

  editCourse(element: Course){
    const dialogRef = this.dialog.open(CoursesFormComponent, {
      width: '700px',
      data: element
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.coursesService.editCourse(res).subscribe(
          () => { this.store.dispatch(loadCourses()) }
        );
      }
    })
  }

  seeCourseDetails(element: Course){
    const dialogRef = this.dialog.open(CoursesDetailsComponent, {
      width: '650px',
      data: element.id
    });

    dialogRef.afterClosed().subscribe(() => {
      this.store.dispatch(loadCourses());
    })
  }

  deleteCourse(element: Course){
    this.coursesService.deleteCourse(element.id).subscribe(() => {
      this.store.dispatch(loadCourses());
    });
  }
}

