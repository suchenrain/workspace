import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from "@angular/core";
import { SearchResult } from "./search-result.model";
import { YouTubeSearchService } from "./you-tube-search.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "app-search-box",
  template: `
    <input type="text" class="form-control" autofocus placeholder="Search">
    `
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  constructor(private youtube: YouTubeSearchService, private el: ElementRef) {}

  ngOnInit() {
    //convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, "keyup")
      .map((e: any) => e.target.value) //extract the value of the input
      .filter((text: string) =>text.length > 1) //filter out if empty
      .debounceTime(300) //only once every 300ms
      .do(() => this.loading.emit(true)) //eable loading
      //search and discarding old events if new input comes in
      .map(query => this.youtube.search(query))
      .switch()
      //act on the return of the search
      .subscribe(
        (results: SearchResult[]) => {
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => {
          console.log(err);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(false);
        }
      );
  }
}
