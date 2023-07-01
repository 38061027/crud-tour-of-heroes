import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { MaterialModule } from '../material/material.module';

import { HeroesRountingModule } from './heroes-rounting.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [HeroesComponent,
    HeroDetailsComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
  HeroesRountingModule,
  ReactiveFormsModule,
  SharedModule

  ]
})
export class HeroesModule { }
