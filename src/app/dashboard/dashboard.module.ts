import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material/material.module';
import { DashboardRountingModule } from './dashboard-rounting.module';




@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRountingModule,

  ]
})
export class DashboardModule { }
