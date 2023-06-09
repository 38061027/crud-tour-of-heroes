import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HeroesRountingModule } from './heroes-rounting.module';




@NgModule({
  declarations: [HeroesComponent,
    HeroDetailsComponent
    ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  HeroesRountingModule

  ]
})
export class HeroesModule { }
