import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkeletonLoadingModule } from '../../src/skeleton-loading.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    SkeletonLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
