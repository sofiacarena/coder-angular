import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UsersFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  usersForm!: FormGroup;
  dialogTitle = this.data ? "Editar" : "Agregar";
  confirmButtonText = this.data ? "Modificar" : "Agregar";
  onlyNumbersRegEx = "^[0-9]+$";

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.usersForm = this.fb.group({
      username: new FormControl(this.data ? this.data.username : "", [Validators.required, Validators.pattern(this.onlyNumbersRegEx)]),
      email: new FormControl(this.data ? this.data.email : "", [Validators.required, Validators.maxLength(100)]),
      password: new FormControl(this.data ? this.data.password : "", [Validators.required, Validators.maxLength(100)]),
      admin: new FormControl(this.data ? this.data.admin : "", [Validators.required, Validators.pattern(this.onlyNumbersRegEx)]),
    })
  }

  getErrorMessage(field: string): string {
    if(this.usersForm.controls[field].errors?.['required']) {
      return "El campo es requerido."
    }
    if(this.usersForm.controls[field].errors?.['pattern']) {
      return "El campo debe ser numérico."
    }
    if(this.usersForm.controls[field].errors?.['maxlength']) {
      return `Excediste el máximo de 100 caracteres.`
    }
    return ""
  }

  onConfirm() {
    if (this.data) {
      const { admin, username, email, password } = this.usersForm.value;
      const editedUser = {
        id: this.data.id,
        username: username,
        email: email,
        password: password,
        admin: admin,
      }
      this.dialogRef.close(editedUser);
    } else {
      this.dialogRef.close(this.usersForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
