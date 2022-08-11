import { Component, OnInit } from '@angular/core';
import { menuOption } from 'src/app/models/navbar.model';

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
      link: "alumnos"
    },
    {
      id: 1,
      name: "Clases",
      link: "clases"
    },
    {
      id: 0,
      name: "Cursos",
      link: "cursos"
    },
  ]
}
