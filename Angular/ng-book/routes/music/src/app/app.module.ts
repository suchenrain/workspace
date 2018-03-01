import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { SPOTIFY_PROVIDERS } from "./services/spotify.service";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TrackComponent } from "./track/track.component";
import { ArtistComponent } from "./artist/artist.component";
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from "@angular/common";
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "artists/:id", component: ArtistComponent },
  { path: "tracks/:id", component: TrackComponent },
  { path: "albums/:id", component: AlbumComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NotFoundComponent,
    TrackComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [
    SPOTIFY_PROVIDERS,
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
