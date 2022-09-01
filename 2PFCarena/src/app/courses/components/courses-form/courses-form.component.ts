import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../../shared/models/courses.model';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CoursesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) { }

  coursesForm!: FormGroup;
  dialogTitle = this.data ? "Editar" : "Agregar";
  confirmButtonText = this.data ? "Modificar" : "Agregar";
  onlyNumbersRegEx = "^[0-9]+$";

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.coursesForm = this.fb.group({
      code: new FormControl(this.data ? this.data.code : "", [Validators.required, Validators.pattern(this.onlyNumbersRegEx)]),
      name: new FormControl(this.data ? this.data.name : "", [Validators.required, Validators.maxLength(100)]),
      teacher: new FormControl(this.data ? this.data.teacher : "", [Validators.required, Validators.maxLength(100)]),
      classCode: new FormControl(this.data ? this.data.classCode : "", [Validators.required, Validators.pattern(this.onlyNumbersRegEx)]),
    })
  }

  getErrorMessage(field: string): string {
    if(this.coursesForm.controls[field].errors?.['required']) {
      return "El campo es requerido."
    }
    if(this.coursesForm.controls[field].errors?.['pattern']) {
      return "El campo debe ser numérico."
    }
    if(this.coursesForm.controls[field].errors?.['maxlength']) {
      return `Excediste el máximo de 100 caracteres.`
    }
    return ""
  }

  onConfirm() {
    if (this.data) {
      const { classCode, code, name, teacher } = this.coursesForm.value;
      const editedCourse = {
        id: this.data.id,
        code: code,
        name: name,
        teacher: teacher,
        noStudents: this.data.noStudents,
        classCode: classCode,
      }
      this.dialogRef.close(editedCourse);
    } else {
      this.dialogRef.close(this.coursesForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
