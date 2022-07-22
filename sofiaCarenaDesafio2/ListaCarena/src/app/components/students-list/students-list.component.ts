import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  moreOrLessStudents = "Más";
  students = [
    {
      name: "Keira",
      surname: "Knightley",
    },
    {
      name: "Matthew",
      surname: "Macfadyen",
    },
    {
      name: "Brenda",
      surname: "Blethyn",
    },
    {
      name: "Donald",
      surname: "Sutherland",
    },
  ];

  additionalStudents = [
    {
      name: "Tom",
      surname: "Hollander",
    },
    {
      name: "Rosamund",
      surname: "Pike",
    },
    {
      name: "Carey",
      surname: "Mulligan",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    if (this.students.length < 5) {
      this.students.push(...this.additionalStudents);
      this.moreOrLessStudents = "Menos";
    } else {
      this.students.splice(4);
      this.moreOrLessStudents = "Más";
    }
  }
}
