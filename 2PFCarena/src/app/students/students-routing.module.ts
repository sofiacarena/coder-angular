import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: StudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
