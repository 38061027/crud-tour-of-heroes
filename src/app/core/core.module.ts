import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';

const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ COMPONENTS  ,MaterialModule]
})
export class CoreModule { }
