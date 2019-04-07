import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoungComponent } from './pagenotfoung/pagenotfoung.component';
import {RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    PagenotfoungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
