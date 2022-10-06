import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadSession } from 'src/app/state/actions/session.actions';
import { AppState } from 'src/app/state/app.state';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFailed = false;
  loginForm: FormGroup = this.fb.group({
    username: new FormControl('Admin1', [Validators.required]),
    password: new FormControl('pass1', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    const userFormData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }
    this.authService.getUsers().subscribe((students) => {
      let loggedUser = students.find(student => student.username === userFormData.username && student.password === userFormData.password);
      if (loggedUser) {
        this.store.dispatch(loadSession({
          activeUser: loggedUser
        }));
        this.router.navigate(['']);
        this.loginFailed = false;
      } else {
        this.loginFailed = true;
      }
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
}
