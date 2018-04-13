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
/**
 * A smart img tag in progressive loading
 * the image will load with a smooth user experience only when it in current viewport
 * so lazy and so smart
 *
 * @example
 * ```html
 * <zc-smart-img
 *   [dummy]="dummyUrl"
 *   [src]="srcUrl"
 *   [allowRetry]="true"
 *   [aspectRatio]="9/16*100">
 * </zc-smart-img>
 * ```
 * @author pawn zhuang at 2018/4/13
 * @version v1.2
 */
@Component({
  selector: "zc-smart-img",
  templateUrl: "./smart-image.component.html",
  styleUrls: ["./smart-image.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartImageComponent implements OnInit {
  /**
   * dummy image that preload before loading the real image
   * @default if no value passed then pick a random color
   * @type {string}
   * @memberof SmartImageComponent
   */
  @Input() dummy: string;
  /**
   * the real image that will be loaded
   * @type {string}
   * @memberof SmartImageComponent
   */
  @Input() src: string;
  /**
   * aspect ratio of the rendered image used to set a placeholder
   * @default 9/16*100
   * @type {number}
   * @memberof SmartImageComponent
   */
  @Input() aspectRatio: number = DefaultSmartImage.aspectRatio; //高宽比
  /**
   * if true then failed image will reload when appear in viewport again
   * @default false
   * @type {boolean}
   * @memberof SmartImageComponent
   */
  @Input() allowRetry: boolean = false;

  /**
   * dummy img tag reference
   *
   * @private
   * @type {ElementRef}
   * @memberof SmartImageComponent
   */
  @ViewChild("dummyImg") private dummyRef: ElementRef;
  /**
   * real img tag reference
   *
   * @private
   * @type {ElementRef}
   * @memberof SmartImageComponent
   */
  @ViewChild("realImg") private realImgRef: ElementRef;
  /**
   * zcInViewport directive reference
   *
   * @private
   * @type {InViewportDirective}
   * @memberof SmartImageComponent
   */
  @ViewChild(InViewportDirective) private viewportRef: InViewportDirective;

  /**
   * if true the real image has been loaded
   *
   * @private
   * @type {boolean}
   * @memberof SmartImageComponent
   */
  private loaded: boolean = false;
  /**
   * if true the dummy image has been loaded
   *
   * @private
   * @type {boolean}
   * @memberof SmartImageComponent
   */
  private dummyLoaded: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {}
  /**
   * handle dummy img `load` event
   *
   * @memberof SmartImageComponent
   */
  onImagePreload() {
    this.dummyLoaded = true;
    this.renderer.addClass(this.dummyRef.nativeElement, "loaded");
    if (this.viewportRef.isInViewport) {
      this.triggerRealImagLoad();
    }
  }
  /**
   * handle dummy img `error` event
   *
   * @memberof SmartImageComponent
   */
  onImagePreloadError() {
    // this.setRandomDummy();
    this.dummyLoaded = true;
    if (this.viewportRef.isInViewport) {
      this.triggerRealImagLoad();
    }
  }
  /**
   * handle real img `load` event
   *
   * @memberof SmartImageComponent
   */
  onImageLoad() {
    this.hideDummy();
    this.renderer.addClass(this.realImgRef.nativeElement, "loaded");
    this.renderer.setStyle(this.realImgRef.nativeElement, "z-index", "999");
    this.loaded = true;
  }

  /**
   * handle real img `error` event
   *
   * @memberof SmartImageComponent
   */
  onImageError() {
    this.renderer.addClass(this.realImgRef.nativeElement, "load-failed");
    this.renderer.setStyle(this.realImgRef.nativeElement, "z-index", "999");
    if (!this.allowRetry) {
      this.loaded = true;
    }
  }

  /**
   * if true means current element is in viewport
   * load dummy=>load real image
   * @param {boolean} state
   * @memberof SmartImageComponent
   */
  onInViewportChange(state: boolean) {
    if (state && !this.dummyLoaded) {
      //have set dummy
      if (this.dummy) {
        this.triggerDummyLoad();
      } else {
        this.setRandomDummy();
        this.triggerRealImagLoad();
      }
    }
    if (state && this.dummyLoaded && !this.loaded) {
      this.triggerRealImagLoad();
    }
  }
  setRandomDummy() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.renderer.setStyle(
      this.dummyRef.nativeElement,
      "background-color",
      randomColor
    );
    this.renderer.addClass(this.dummyRef.nativeElement, "random-dummy");
    this.renderer.addClass(this.dummyRef.nativeElement, "loaded");
    this.dummyLoaded = true;
  }
  triggerRealImagLoad() {
    this.renderer.setAttribute(this.realImgRef.nativeElement, "src", this.src);
  }
  triggerDummyLoad() {
    this.renderer.setAttribute(this.dummyRef.nativeElement, "src", this.dummy);
  }
  hideDummy() {
    this.renderer.removeClass(this.dummyRef.nativeElement, "loaded");
  }
}
