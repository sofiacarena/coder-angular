import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/students.model';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private dialogRef: MatDialogRef<StudentsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public studentId: number
  ) {
    if (this.studentId != null) {
      this.studentsService.getStudentsById(this.studentId).then((student) => {
        console.log(student);
        this.studentData = student;
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  studentsForm!: FormGroup;
  studentData!: any;
  dialogTitle = this.studentId != null ? "Editar" : "Agregar";
  confirmButtonText = this.studentId != null ? "Modificar" : "Agregar";
  onlyNumbersRegEx = "^[0-9]+$";

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.studentsForm = this.fb.group({
      firstName: new FormControl(this.studentData ? this.studentData.firstName : "", [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl(this.studentData ? this.studentData.lastName : "", [Validators.required, Validators.maxLength(50)]),
      email: new FormControl(this.studentData ? this.studentData.email : "", [Validators.required, Validators.email]),
      course: new FormControl(this.studentData ? this.studentData.course : "", [Validators.required, Validators.maxLength(20)]),
      grade: new FormControl(this.studentData ? this.studentData.grade : "", [Validators.required, Validators.pattern(this.onlyNumbersRegEx)]),
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
    this.dialogRef.close(this.studentsForm.value);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
