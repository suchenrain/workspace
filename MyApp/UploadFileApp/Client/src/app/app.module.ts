import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FileUploadService } from "./common/file-upload.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers:[FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
