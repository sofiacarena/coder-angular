import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EnrollmentsState } from 'src/app/shared/models/enrollments.state';
import { selectLoadedEnrollmentsState } from '../../state/enrollments.selectors';

@Component({
  selector: 'app-enrollments-details',
  templateUrl: './enrollments-details.component.html',
  styleUrls: ['./enrollments-details.component.scss']
})
export class EnrollmentsDetailsComponent implements OnInit {
  selectedEnrollment!: any;

  constructor(
    private store: Store<EnrollmentsState>,
    private dialogRef: MatDialogRef<EnrollmentsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedEnrollmentId: number
  ) { }

  ngOnInit(): void {
    this.store.select(selectLoadedEnrollmentsState).subscribe((enrollments) => {
      this.selectedEnrollment = enrollments?.find(enrollment => enrollment.id === this.selectedEnrollmentId);
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
