import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    TemplateComponent,
    ReactiveComponent,
    ForbiddenNameDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
