import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Enrollment } from '../../../shared/models/enrollments.model';
import { EnrollmentsService } from '../../../shared/services/enrollments.service';
import { EnrollmentsFormComponent } from '../enrollments-form/enrollments-form.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit, OnDestroy {
  displayedColumns$!: Observable<string[]>;
  enrollments: Enrollment[] = [];
  subscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private enrollmentsService: EnrollmentsService,
  ) { }

  ngOnInit(): void {
    this.getEnrollments();
    this.displayedColumns$ = this.enrollmentsService.getEnrollmentsTableColumns();
  }

  dataSource = new MatTableDataSource<Enrollment>();
  @ViewChild(MatTable) enrollmentsTable!: MatTable<Enrollment>;

  getEnrollments() {
    this.subscription = this.enrollmentsService.getEnrollments()
      .subscribe((enrollments) => {
        this.dataSource.data = enrollments;
      });
  }

  addEnrollment(){
    const dialogRef = this.dialog.open(EnrollmentsFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.enrollmentsService.addEnrollment(res).subscribe(
          () => {this.getEnrollments()}
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
          () => {this.getEnrollments()}
        );
      }
    })
  }

  deleteEnrollment(element: Enrollment){
    this.enrollmentsService.deleteEnrollment(element.id).subscribe(() => {
      this.getEnrollments();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
