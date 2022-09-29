import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/shared/models/students.model';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) { }

  studentsForm!: FormGroup;
  dialogTitle = this.data ? "Editar" : "Agregar";
  confirmButtonText = this.data ? "Modificar" : "Agregar";
  onlyNumbersRegEx = "^[0-9]+$";

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.studentsForm = this.fb.group({
      firstName: new FormControl(this.data ? this.data.firstName : "", [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl(this.data ? this.data.lastName : "", [Validators.required, Validators.maxLength(50)]),
      email: new FormControl(this.data ? this.data.email : "", [Validators.required, Validators.email]),
      course: new FormControl(this.data ? this.data.course : "", [Validators.required, Validators.maxLength(20)]),
      grade: new FormControl(this.data ? this.data.grade : "", [Validators.required, Validators.pattern(this.onlyNumbersRegEx)]),
    })
  }

  getErrorMessage(field: string): string {
    if(this.studentsForm.controls[field].errors?.['required']) {
      return "El campo es requerido."
    }
    if(this.studentsForm.controls[field].errors?.['pattern']) {
      return "La puntuación debe ser numérica."
    }
    if(this.studentsForm.controls[field].errors?.['email']) {
      return "Formato inválido."
    }
    if(this.studentsForm.controls[field].errors?.['maxlength']) {
      let length = field === 'course' ? 20 : 50;
      return `Excediste el máximo de ${length} caracteres.`
    }
    return ""
  }

  onConfirm() {
    if (this.data) {
      const editedStudent = {
        id: this.data.id,
        ...this.studentsForm.value
      }
      this.dialogRef.close(editedStudent);
    } else {
      this.dialogRef.close(this.studentsForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}


