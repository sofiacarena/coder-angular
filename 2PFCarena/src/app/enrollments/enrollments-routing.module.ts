import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentsComponent } from './components/enrollments/enrollments.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: EnrollmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentsRoutingModule { }
