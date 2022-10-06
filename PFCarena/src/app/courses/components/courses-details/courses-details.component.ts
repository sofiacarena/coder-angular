import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CoursesState } from 'src/app/shared/models/courses.state';
import { selectLoadedCoursesState } from '../../state/courses.selectors';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {
  selectedCourse!: any;

  constructor(
    private store: Store<CoursesState>,
    private dialogRef: MatDialogRef<CoursesDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedCourseId: number
  ) { }

  ngOnInit(): void {
    this.store.select(selectLoadedCoursesState).subscribe((courses) => {
      this.selectedCourse = courses?.find(course => course.id === this.selectedCourseId);
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
