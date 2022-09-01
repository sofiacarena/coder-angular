import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Enrollment } from '../../../shared/models/enrollments.model';

@Component({
  selector: 'app-enrollments-form',
  templateUrl: './enrollments-form.component.html',
  styleUrls: ['./enrollments-form.component.scss']
})
export class EnrollmentsFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EnrollmentsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Enrollment
  ) { }

  enrollmentsForm!: FormGroup;
  dialogTitle = this.data ? "Editar" : "Agregar";
  confirmButtonText = this.data ? "Modificar" : "Agregar";
  onlyNumbersRegEx = "^[0-9]+$";

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.enrollmentsForm = this.fb.group({
      student: new FormControl(this.data ? this.data.student : "", [Validators.required, Validators.maxLength(100)]),
      course: new FormControl(this.data ? this.data.course : "", [Validators.required, Validators.maxLength(100)]),
      classCode: new FormControl(this.data ? this.data.classCode : "", [Validators.required, Validators.pattern(this.onlyNumbersRegEx)]),
    })
  }

  getErrorMessage(field: string): string {
    if(this.enrollmentsForm.controls[field].errors?.['required']) {
      return "El campo es requerido."
    }
    if(this.enrollmentsForm.controls[field].errors?.['pattern']) {
      return "El campo debe ser numérico."
    }
    if(this.enrollmentsForm.controls[field].errors?.['maxlength']) {
      return `Excediste el máximo de 100 caracteres.`
    }
    return ""
  }

  onConfirm() {
    if (this.data) {
      const { student, course, classCode } = this.enrollmentsForm.value;
      const editedEnrollment = {
        id: this.data.id,
        code: this.data.code,
        course: course,
        student: student,
        classCode: classCode,
      }
      this.dialogRef.close(editedEnrollment);
    } else {
      this.dialogRef.close(this.enrollmentsForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
