import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { SpotifyService } from "../services/spotify.service";
@Component({
  selector: "inventory-app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.spotify.getArtist(this.id).subscribe(res => this.renderArtist(res));
  }

  back() {
    this.location.back();
  }

  renderArtist(res: any) {
    this.artist = res;
  }
}
