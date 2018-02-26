import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { FormWithValidationsExplicitComponent } from './form-with-validations-explicit/form-with-validations-explicit.component';
import { FomrNgModelComponent } from './fomr-ng-model/fomr-ng-model.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    FormWithValidationsExplicitComponent,
    FomrNgModelComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,/* ngModel and ngForm */
    ReactiveFormsModule, /* formControl and ngFormGroup */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
