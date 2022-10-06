import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Enrollment } from '../../../shared/models/enrollments.model';
import { EnrollmentsService } from '../../../shared/services/enrollments.service';
import { EnrollmentsFormComponent } from '../enrollments-form/enrollments-form.component';
import { EnrollmentsState } from '../../../shared/models/enrollments.state';
import { Store } from '@ngrx/store';
import { loadEnrollments } from '../../state/enrollments.actions';
import { selectLoadingEnrollmentsState, selectLoadedEnrollmentsState } from '../../state/enrollments.selectors';
import { EnrollmentsDetailsComponent } from '../enrollments-details/enrollments-details.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit {
  displayedColumns$!: Observable<string[]>;
  loading$!: Observable<boolean>;
  dataSource!: MatTableDataSource<Enrollment>;

  constructor(
    private store: Store<EnrollmentsState>,
    private dialog: MatDialog,
    private enrollmentsService: EnrollmentsService,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadEnrollments());
    this.loading$ = this.store.select(selectLoadingEnrollmentsState);
    this.store.select(selectLoadedEnrollmentsState).subscribe((enrollments) => {
      this.dataSource = new MatTableDataSource(enrollments);
    })
    this.displayedColumns$ = this.enrollmentsService.getEnrollmentsTableColumns();
  }

  @ViewChild(MatTable) enrollmentsTable!: MatTable<Enrollment>;

  addEnrollment(){
    const dialogRef = this.dialog.open(EnrollmentsFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.enrollmentsService.addEnrollment(res).subscribe(
          () => { this.store.dispatch(loadEnrollments()); }
        );
      }
    })
  }

  editEnrollment(element: Enrollment){
    const dialogRef = this.dialog.open(EnrollmentsFormComponent, {
      width: '700px',
      data: element
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.enrollmentsService.editEnrollment(res).subscribe(
          () => { this.store.dispatch(loadEnrollments()); }
        );
      }
    })
  }

  seeEnrollmentDetails(element: Enrollment){
    const dialogRef = this.dialog.open(EnrollmentsDetailsComponent, {
      width: '650px',
      data: element.id
    });
  }

  deleteEnrollment(element: Enrollment){
    this.enrollmentsService.deleteEnrollment(element.id).subscribe(() => {
      this.store.dispatch(loadEnrollments());
    });
  }
}
