import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import "rxjs/Rx";

import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Rx";
@Injectable()
export class SpotifyService {
  static BASE_URL = "https://api.spotify.com/v1";

  constructor(private http: Http) {}

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryUrl = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryUrl = `${queryUrl}?${params.join("&")}`;
    }
    const apiToken = environment.spotifyApiKey;
    const headers = new Headers({
      Authorization: `Bearer ${apiToken}`
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.request(queryUrl, options).map((res: any) => res.json());
  }
  //search
  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, "track");
  }

  //
  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }
  //
  getArtist(id: string) {
    return this.query(`/artists/${id}`);
  }
  //
  getAlbum(id: string) {
    return this.query(`/albums/${id}`);
  }
}

export const SPOTIFY_PROVIDERS: Array<any> = [
  { provide: SpotifyService, useClass: SpotifyService }
];
