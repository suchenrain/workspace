import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UIWidgetModule } from "@zchen/widget";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UIWidgetModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
