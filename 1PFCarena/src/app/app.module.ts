import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { MainScreenComponent } from './components/layout/main-screen/main-screen.component';
import { NavBarComponent } from './components/layout/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsFormComponent } from './components/students/students-form/students-form.component';
import { CoursesComponent } from './components/courses/courses/courses.component';
import { ClassesComponent } from './components/classes/classes/classes.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullnameUppercasePipe } from './pipes/fullname-uppercase.pipe';
import { GradeColorDirective } from './directives/grade-color.directive';
import { HeaderSizeDirective } from './directives/header-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainScreenComponent,
    NavBarComponent,
    LayoutComponent,
    StudentsComponent,
    StudentsFormComponent,
    CoursesComponent,
    ClassesComponent,
    FullnameUppercasePipe,
    GradeColorDirective,
    HeaderSizeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
