import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

  const MODULES = [
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      MODULES
  ],
  exports: [MODULES]
})
export class MaterialModule { }