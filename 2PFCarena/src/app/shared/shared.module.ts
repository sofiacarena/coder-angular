import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderSizeDirective } from './directives/header-size.directive';
import { GradeColorDirective } from './directives/grade-color.directive';
import { FullnameUppercasePipe } from './pipes/fullname-uppercase.pipe';


@NgModule({
  declarations: [
    FullnameUppercasePipe,
    GradeColorDirective,
    HeaderSizeDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FullnameUppercasePipe,
    GradeColorDirective,
    HeaderSizeDirective
  ],
})
export class SharedModule { }
