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
  courses: Course[] = [];
  subscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.coursesService.getCourses()
      .subscribe((course) => {
        this.courses.push(course);
      });
    this.displayedColumns$ = this.coursesService.getCoursesTableColumns();
  }

  dataSource: MatTableDataSource<Course> = new MatTableDataSource(this.courses);
  @ViewChild(MatTable) coursesTable!: MatTable<Course>;

  addCourse(){
    const dialogRef = this.dialog.open(CoursesFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.dataSource.data.push(res);
        this.coursesTable.renderRows();
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
        const item = this.dataSource.data.find(course => course.id === res.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = res;
        this.coursesTable.renderRows();
      }
    })
  }

  deleteCourse(element: Course){
    this.dataSource.data = this.dataSource.data.filter((course: Course) => course.id != element.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

