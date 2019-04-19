import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from './app.route';
import { HomeComponent }  from './home/home.component';
import { ErrorComponent }  from './error/error.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from "./home/home.service";

@NgModule({
  imports:      [ BrowserModule, routing, ReactiveFormsModule, HttpClientModule],
  declarations: [ AppComponent, HomeComponent, ErrorComponent, FormComponent],
  bootstrap:    [ AppComponent ],
  providers: [ HomeService ]
})
export class AppModule { }
