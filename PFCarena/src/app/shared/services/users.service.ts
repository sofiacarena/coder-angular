import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, USERS_COLUMNS } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  columns = USERS_COLUMNS;
  readonly USERS_URL = environment.api + '/users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USERS_URL);
  }

  getUsersTableColumns() {
    return of(this.columns);
  }

  addUser(user: User) {
    return this.http.post(this.USERS_URL, user);
  }

  editUser(user: User) {
    return this.http.put(this.USERS_URL + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.USERS_URL + id);
  }
}
