import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsComponent } from './components/enrollments/enrollments.component';
import { EnrollmentsFormComponent } from './components/enrollments-form/enrollments-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    EnrollmentsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EnrollmentsModule { }
