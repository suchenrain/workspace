import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageNotFoundComponent } from "./not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
