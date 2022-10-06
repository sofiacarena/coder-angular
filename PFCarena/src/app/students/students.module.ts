import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './components/students/students.component';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './state/students.effects';
import { StoreModule } from '@ngrx/store';
import * as fromStudents from './state/students.reducer';
import { StudentsDetailsComponent } from './components/students-details/students-details.component'

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsDetailsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromStudents.studentsFeatureKey, fromStudents.reducer),
    EffectsModule.forFeature([StudentsEffects])
  ]
})
export class StudentsModule { }
