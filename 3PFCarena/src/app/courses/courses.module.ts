import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
