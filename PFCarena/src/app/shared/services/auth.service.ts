import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Session } from '../models/session.model';
import { LoginUser, User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionSubject!: BehaviorSubject<Session>
  readonly USERS_URL = 'https://6310ece919eb631f9d6976a5.mockapi.io/api/users/';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<User[]>(this.USERS_URL);
  }
}
