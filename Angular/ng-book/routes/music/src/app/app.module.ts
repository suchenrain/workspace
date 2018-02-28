import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { SpotifyService } from "./services/spotify.service";

const routes: Routes = [
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "search", component: SearchComponent },
  // { path: "artists/:id", component: ArtistComponent },
  // { path: "tracks/:id", component: TrackComponent },
  // { path: "albums/:id", component: AlbumComponent }
];

@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
