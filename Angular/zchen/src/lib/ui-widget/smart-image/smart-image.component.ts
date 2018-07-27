import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { InViewportDirective } from '@zchen/common';
import { DefaultSmartImage, DummyLoadMode } from './default.data';
@Component({
  selector: 'zc-smart-img',
  templateUrl: './smart-image.component.html',
  styleUrls: ['./smart-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartImageComponent implements OnInit {
  @Input() loadMode: any = DummyLoadMode.InSight;
  @Input() dummy: string;
  @Input() src: string;
  @Input() aspectRatio: number = DefaultSmartImage.aspectRatio; //高宽比

  @ViewChild('dummyImg') private dummyRef: ElementRef;
  @ViewChild('realImg') private realImgRef: ElementRef;
  @ViewChild(InViewportDirective) private viewportRef: InViewportDirective;

  private dummySetted: boolean = false;
  private dummyLoaded: boolean = false;
  private srcSetted: boolean = false;
  private srcLoaded: boolean = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.preSetupLoadMode();
  }

  preSetupLoadMode() {
    switch (this.loadMode) {
      case DummyLoadMode.InSight:
        if (this.viewportRef.isInViewport) {
          this.setDummySrc();
        }
        break;
      case DummyLoadMode.Anyway:
        this.setDummySrc();
        break;
    }
  }
  setDummySrc() {
    this.renderer.setAttribute(this.dummyRef.nativeElement, 'src', this.dummy);
    this.dummySetted = true;
  }
  setRealSrc() {
    this.renderer.setAttribute(this.realImgRef.nativeElement, 'src', this.src);
    this.srcSetted = true;
  }
  //once dummy loaded
  onImagePreload() {
    this.dummyLoaded = true;
    this.renderer.addClass(this.dummyRef.nativeElement, 'loaded');
    if (this.viewportRef.isInViewport) {
      this.setRealSrc();
    }
  }
  onImagePreloadError() {
    this.dummyLoaded = true;
    if (this.viewportRef.isInViewport) {
      this.setRealSrc();
    }
  }
  //once real img loaded
  onImageLoad() {
    this.renderer.addClass(this.realImgRef.nativeElement, 'loaded');
    this.renderer.setStyle(this.realImgRef.nativeElement, 'z-index', '999');
    this.srcLoaded = true;
  }
  onInViewportChange(state: boolean) {
    if (state && !this.dummySetted) {
      this.setDummySrc();
    }
    if (state && this.dummyLoaded && !this.srcSetted && !this.srcLoaded) {
      this.setRealSrc();
    }
  }
}
