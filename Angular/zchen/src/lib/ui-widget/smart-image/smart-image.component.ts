import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "zc-smart-image",
  templateUrl: "./smart-image.component.html",
  styleUrls: ["./smart-image.component.css"]
})
export class SmartImageComponent implements OnInit {
  @Input() src: string;
  @Input() tinySrc: string;

  constructor() {}

  ngOnInit() {
    let img
  }
}
