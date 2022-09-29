import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
