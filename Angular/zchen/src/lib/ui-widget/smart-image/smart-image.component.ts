import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { InViewportDirective } from "../../common";
import { DefaultSmartImage } from "./default.data";
@Component({
  selector: "zc-smart-img",
  templateUrl: "./smart-image.component.html",
  styleUrls: ["./smart-image.component.css"]
})
export class SmartImageComponent implements OnInit {
  @Input() dummy: string;
  @Input() src: string;
  @Input() aspectRatio: number = DefaultSmartImage.aspectRatio; //高宽比

  @ViewChild("dummyImg") private dummyRef: ElementRef;
  @ViewChild("realImg") private realImgRef: ElementRef;
  @ViewChild(InViewportDirective) private viewportRef: InViewportDirective;

  public loadSrc: string = "";
  public dummySrc: string = "";
  private loaded: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {}
  onImagePreload() {
    this.renderer.addClass(this.dummyRef.nativeElement, "loaded");
  }
  onImagePreloadError() {}
  onImageLoad() {
    this.renderer.addClass(this.realImgRef.nativeElement, "loaded");
    this.renderer.setStyle(this.realImgRef.nativeElement, "z-index", "999");
    this.loaded = true;
  }
  onInViewportChange(state: boolean) {
    if (state && !this.loaded) {
      this.dummySrc = this.dummy;
      this.loadSrc = this.src;
    }
  }
}
