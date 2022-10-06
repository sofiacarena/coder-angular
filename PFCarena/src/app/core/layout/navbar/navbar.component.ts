import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { menuOption } from 'src/app/shared/models/navbar.model';
import { AppState } from 'src/app/state/app.state';
import { selectAdminUserState } from 'src/app/state/selectors/session.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  adminUser$: Observable<boolean | undefined>;

  constructor(private store: Store<AppState>) {
    this.adminUser$ = this.store.select(selectAdminUserState);
  }

  ngOnInit(): void {
  }

  menuOptions: menuOption[] = [
    {
      id: 0,
      name: "Alumnos",
      link: "students"
    },
    {
      id: 1,
      name: "Cursos",
      link: "courses"
    },
    {
      id: 2,
      name: "Inscripciones",
      link: "enrollments"
    },
    {
      id: 3,
      name: "Usuarios",
      link: "users"
    },
  ]
}
