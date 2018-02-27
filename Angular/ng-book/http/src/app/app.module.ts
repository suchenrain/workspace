import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { youTubeSearchInjectables } from "./you-tube-search/you-tube-search.injectables";

import { AppComponent } from "./app.component";
import { SimpleHttpComponent } from "./simple-http/simple-http.component";
import { YouTubeSearchComponent } from "./you-tube-search/you-tube-search.component";
import { SearchBoxComponent } from "./you-tube-search/search-box.component";
import { SearchResultComponent } from "./you-tube-search/search-result.component";

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule {}
