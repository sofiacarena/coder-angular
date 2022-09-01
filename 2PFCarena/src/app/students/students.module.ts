import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './components/students/students.component';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
