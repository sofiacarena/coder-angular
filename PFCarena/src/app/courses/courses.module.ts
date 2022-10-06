import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesFormComponent } from './components/courses-form/courses-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCourses from './state/courses.reducer';
import { CoursesEffects } from './state/courses.effects';
import { CoursesDetailsComponent } from './components/courses-details/courses-details.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent,
    CoursesDetailsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromCourses.coursesFeatureKey, fromCourses.reducer),
    EffectsModule.forFeature([CoursesEffects])
  ]
})
export class CoursesModule { }
