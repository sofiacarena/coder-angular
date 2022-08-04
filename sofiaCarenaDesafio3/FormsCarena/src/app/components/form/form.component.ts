import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  public userForm!: FormGroup;
  passwordRegEx = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  onlyNumbersRegEx = "^[0-9]+$";

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: new FormControl("", [Validators.required, Validators.maxLength(100)]),
      surname: new FormControl("", [Validators.required, Validators.maxLength(100)]),
      username: new FormControl("", [Validators.required, Validators.minLength(6)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegEx)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobile: new FormControl("", [Validators.required, Validators.pattern(this.onlyNumbersRegEx)])
    })
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  get name() { return this.userForm.get('name'); }
  get surname() { return this.userForm.get('surname'); }
  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }
  get email() { return this.userForm.get('email'); }
  get mobile() { return this.userForm.get('mobile'); }
}
