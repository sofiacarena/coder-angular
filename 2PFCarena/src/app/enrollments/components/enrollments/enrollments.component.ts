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
    this.subscription = this.enrollmentsService.getEnrollments()
      .subscribe((enrollment) => {
        this.enrollments.push(enrollment);
      });
    this.displayedColumns$ = this.enrollmentsService.getEnrollmentsTableColumns();
  }

  dataSource: MatTableDataSource<Enrollment> = new MatTableDataSource(this.enrollments);
  @ViewChild(MatTable) enrollmentsTable!: MatTable<Enrollment>;

  addEnrollment(){
    const dialogRef = this.dialog.open(EnrollmentsFormComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.dataSource.data.push(res);
        this.enrollmentsTable.renderRows();
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
        const item = this.dataSource.data.find(enrollment => enrollment.id === res.id);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = res;
        this.enrollmentsTable.renderRows();
      }
    })
  }

  deleteEnrollment(element: Enrollment){
    this.dataSource.data = this.dataSource.data.filter((enrollment: Enrollment) => enrollment.id != element.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
