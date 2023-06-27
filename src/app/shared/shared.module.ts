import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';


const COMPONENTS = [HeroSearchComponent];


@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [COMPONENTS]
})
export class SharedModule { }