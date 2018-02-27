import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserDemoModule } from "./user-demo/user-demo.module";
import { AnalyticsDemoModule } from "./analytics-demo/analytics-demo.module";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserDemoModule,
    AnalyticsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
