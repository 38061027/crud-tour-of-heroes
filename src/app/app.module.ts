import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRountingModule } from './app-rounting.module';
import { HttpClientModule } from '@angular/common/http'

//Components


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';










@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [

    //@angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // app

    AppRountingModule,
    CoreModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
