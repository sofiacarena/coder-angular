import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavBarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    NavBarComponent,
    ToolbarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule
  ]
})
export class CoreModule { }
