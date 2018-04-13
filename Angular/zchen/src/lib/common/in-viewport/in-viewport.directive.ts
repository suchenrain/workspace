import {
  Directive,
  ElementRef,
  HostBinding,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
  NgZone
} from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { fromEvent } from "rxjs/observable/fromEvent";
import { merge } from "rxjs/observable/merge";
import { auditTime, debounceTime, takeUntil } from "rxjs/operators";

import { WindowRef } from "./window/window-ref.service";
import { Viewport } from "./shared/viewport.model";
import * as eventData from "./shared/event-data";

/**
 * A simple lightweight library for Angular with no
 * external dependencies that detects when an element is within the
 * browser viewport and adds a `zc-viewport-in` or `zc-viewport-out` class
 * to the element.
 *
 * @example
 * ```html
 * <p
 *  class="foo"
 *  zcInViewport
 *  (inViewportChange)="yourEventHandler($event)"
 * [debounce]="300">
 * some text here
 * </p>
 * ```
 * @author pawn zhuang at 2018/4/12
 * @version v1.1
 */
@Directive({
  selector: "[zcInViewport]",
  exportAs: "zcInViewport"
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
  /**
   * @description Amount of time in ms to wait for other scroll events
   *  before trigger event handler
   */
  @Input() public debounce = 100;

  /**
   * @description A parent element to listen to scroll events from
   */
  @Input() public parent: any;

  /**
   * @description Emits event when `inViewport` value changes
   */
  @Output() inViewportChange = new EventEmitter<boolean>();
  /**
   * @description if true indicate host element is in the browser viewport
   */
  private inViewport: boolean;
  /**
   * @description Observable that returns the size of the viewport
   */
  private viewport$ = new Subject<void>();

  /**
   * @description component destroy lifecycle event
   * handle unsubscription from infinite observables
   */
  private ngUnsubscribe$ = new Subject<void>();

  /**
   * @readonly
   * @description set the in viewport class and get status
   * @returns ture if element is in viewport
   */
  @HostBinding(eventData.inViewportClass)
  public get isInViewport(): boolean {
    return this.inViewport;
  }
  /**
   * @readonly
   * @description set the out viewport class and get status
   * @returns true if element is not in viewport
   */
  @HostBinding(eventData.outViewportClass)
  public get isOutViewport(): boolean {
    return !this.inViewport;
  }
  /**
   *
   * Get window viewport values
   * @readonly
   * @type {Viewport}
   */
  public get viewport(): Viewport {
    const bottom = this.windowRef.innerHeight;
    const left = 0;
    const right = this.windowRef.innerWidth;
    const top = 0;
    return { bottom, left, right, top };
  }
  /**
   * Creates an instance of InViewportDirective.
   * @param {WindowRef} windowRef
   * @param {ElementRef} el
   * @param {ChangeDetectorRef} cdRef
   * @param {NgZone} ngZone
   * @memberof InViewportDirective
   */
  constructor(
    private windowRef: WindowRef,
    private el: ElementRef,
    private cdRef: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  /**
   * S
   *
   * @memberof InViewportDirective
   */
  ngAfterViewInit() {
    this.calcInViewportStatus();
    this.cdRef.detectChanges();

    this.viewport$
      .pipe(debounceTime(this.debounce), takeUntil(this.ngUnsubscribe$))
      .subscribe(() => this.calcInViewportStatus());
      
    //listen window scroll/resize events
    this.ngZone.runOutsideAngular(() => {
      merge(
        fromEvent(this.windowRef as any, eventData.eventWindowResize),
        fromEvent(this.windowRef as any, eventData.eventWindowScroll)
      )
        .pipe(auditTime(this.debounce), takeUntil(this.ngUnsubscribe$))
        .subscribe(() => this.onViewportChange());
    });
    //listen parent scroll event if parent is available
    if (this.parent) {
      this.ngZone.runOutsideAngular(() => {
        fromEvent(this.parent, eventData.eventScroll)
          .pipe(auditTime(this.debounce), takeUntil(this.ngUnsubscribe$))
          .subscribe(() => this.onParentScroll());
      });
    }
  }
  /**
   * Get window element from parent scroll event
   * and emit next value in `viewport$` observable
   */
  public onParentScroll() {
    this.viewport$.next();
  }
  /**
   * On window scroll/resize/load events
   * and emit next `viewport$` observable value
   */
  public onViewportChange() {
    this.viewport$.next();
  }

  /**
   * Calculate inViewport status and emit event
   * when viewport status has changed
   *
   */
  public calcInViewportStatus(): void {
    const el = this.el.nativeElement;
    let inParentViewport = false;
    let inWindowViewport = false;

    if (this.parent) {
      const parentBounds = this.parent.getBoundingClientRect();
      inParentViewport = this.isInElementViewport(parentBounds, el);
      inWindowViewport = this.isInElementViewport(this.viewport, this.parent);
    } else {
      inParentViewport = true;
      inWindowViewport = this.isInElementViewport(this.viewport, el);
    }
    const lastInViewport = this.inViewport;
    this.inViewport = inParentViewport && inWindowViewport;

    if (lastInViewport !== this.inViewport) {
      this.ngZone.run(() => this.inViewportChange.emit(this.inViewport));
    }
  }
  /**
   * check if an element is currently within the `viewport`
   * @returns boolean
   */
  public isInElementViewport(viewport: Viewport, el: any): boolean {
    if (typeof el.getBoundingClientRect === "function") {
      const elBounds = el.getBoundingClientRect();
      return (
        ((elBounds.top >= viewport.top && elBounds.top <= viewport.bottom) ||
          (elBounds.bottom >= viewport.top &&
            elBounds.bottom <= viewport.bottom) ||
          (elBounds.top <= viewport.top &&
            elBounds.bottom >= viewport.bottom)) &&
        ((elBounds.left >= viewport.left && elBounds.left <= viewport.right) ||
          (elBounds.right >= viewport.left &&
            elBounds.right <= viewport.right) ||
          (elBounds.left <= viewport.left && elBounds.right >= viewport.right))
      );
    } else {
      return false;
    }
  }
  /**
   * trigger `ngUnsubscribe` complete on
   * component destroy lifecycle hook
   */
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
