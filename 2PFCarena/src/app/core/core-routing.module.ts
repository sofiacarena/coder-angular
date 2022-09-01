import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "students", pathMatch: "full" },
      {
        path: "students",
        canActivate: [AuthGuard],
        loadChildren: () => import("../students/students.module").then((m) => m.StudentsModule),
      },
      {
        path: "courses",
        canActivate: [AuthGuard],
        loadChildren: () => import("../courses/courses.module").then((m) => m.CoursesModule),
      },
      {
        path: "enrollments",
        canActivate: [AuthGuard],
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
