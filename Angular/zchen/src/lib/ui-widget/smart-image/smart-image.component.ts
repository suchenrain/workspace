import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy
} from "@angular/core";
import { InViewportDirective } from "../../common";
import { DefaultSmartImage } from "./default.data";
@Component({
  selector: "zc-smart-img",
  templateUrl: "./smart-image.component.html",
  styleUrls: ["./smart-image.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartImageComponent implements OnInit {
  @Input() dummy: string;
  @Input() src: string;
  @Input() aspectRatio: number = DefaultSmartImage.aspectRatio; //高宽比

  @ViewChild("dummyImg") private dummyRef: ElementRef;
  @ViewChild("realImg") private realImgRef: ElementRef;
  @ViewChild(InViewportDirective) private viewportRef: InViewportDirective;

  private loaded: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // if (this.viewportRef.isInViewport) {
    //   //trigger dummy image load if current elemnt is in viewport
    //   this.renderer.setAttribute(
    //     this.dummyRef.nativeElement,
    //     "src",
    //     this.dummy
    //   );
    // }
  }
  //once dummy loaded
  onImagePreload() {
    this.renderer.addClass(this.dummyRef.nativeElement, "loaded");
    this.renderer.setAttribute(this.realImgRef.nativeElement, "src", this.src);
  }
  onImagePreloadError() {}
  //once real img loaded
  onImageLoad() {
    this.renderer.addClass(this.realImgRef.nativeElement, "loaded");
    this.renderer.setStyle(this.realImgRef.nativeElement, "z-index", "999");
    this.loaded = true;
  }
  onInViewportChange(state: boolean) {
    if (state && !this.loaded) {
      this.renderer.setAttribute(
        this.dummyRef.nativeElement,
        "src",
        this.dummy
      );
    }
  }
}
