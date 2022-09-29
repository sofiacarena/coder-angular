import { Component, OnInit } from '@angular/core';
import { menuOption } from 'src/app/shared/models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

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
    {
      id: 4,
      name: "Log Out",
      link: "logout"
    },
  ]
}
