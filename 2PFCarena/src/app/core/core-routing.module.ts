import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "students", pathMatch: "full" },
      {
        path: "students",
        loadChildren: () => import("../students/students.module").then((m) => m.StudentsModule),
      },
      {
        path: "courses",
        loadChildren: () => import("../courses/courses.module").then((m) => m.CoursesModule),
      },
      {
        path: "enrollments",
        loadChildren: () => import("../enrollments/enrollments.module").then((m) => m.EnrollmentsModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
