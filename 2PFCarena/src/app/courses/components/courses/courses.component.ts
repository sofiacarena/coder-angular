import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/shared/models/courses.model';
import { CoursesService } from '../../../shared/services/courses.service';
import { CoursesFormComponent } from '../courses-form/courses-form.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  displayedColumns$!: Observable<string[]>;
  subscriptions!: Subscription;

  constructor(
    private dialog: MatDialog,
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.getCourses();
    this.displayedColumns$ = this.coursesService.getCoursesTableColumns();
  }

  dataSource = new MatTableDataSource<Course>();
  @ViewChild(MatTable) coursesTable!: MatTable<Course>;

  getCourses() {
    this.subscriptions = this.coursesService.getCourses()
      .subscribe((courses) => {
        this.dataSource.data = courses;
      });
  }

  addCourse(){
    const dialogRef = this.dialog.open(CoursesFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.coursesService.addCourse(res).subscribe(
          () => {this.getCourses()}
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
          () => {this.getCourses()}
        );
      }
    })
  }

  deleteCourse(element: Course){
    this.coursesService.deleteCourse(element.id).subscribe(() => {
      this.getCourses();
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

