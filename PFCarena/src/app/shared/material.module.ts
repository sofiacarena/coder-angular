import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule { }
