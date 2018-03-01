import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "inventory-app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.css"]
})
export class TrackComponent implements OnInit {
  track: any;
  id: string;
  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });
  }

  ngOnInit() {
    this.spotify
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back() {
    this.location.back();
  }

  renderTrack(res: any) {
    this.track = res;
  }
}
