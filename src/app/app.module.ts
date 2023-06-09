import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRountingModule } from './app-rounting.module';


//Components


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';









@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [

    //@angular

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    // feature
    DashboardModule,
    HeroesModule,

    // app

    AppRountingModule,
    CoreModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
