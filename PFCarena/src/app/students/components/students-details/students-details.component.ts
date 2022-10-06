import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { StudentsState } from 'src/app/shared/models/students.state';
import { selectLoadedStudentsState } from '../../state/students.selectors';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss']
})
export class StudentsDetailsComponent implements OnInit {
  selectedStudent!: any;

  constructor(
    private store: Store<StudentsState>,
    private dialogRef: MatDialogRef<StudentsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public selectedStudentId: number
  ) { }

  ngOnInit(): void {
    this.store.select(selectLoadedStudentsState).subscribe((students) => {
      this.selectedStudent = students?.find(student => student.id === this.selectedStudentId);
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
