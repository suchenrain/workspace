import { ElementRef, NgZone } from "@angular/core";
import { InViewportDirective, WindowRef } from ".";
import { FakeDOMStandardElement, MockNgZone } from "./testing";

describe("InViewportDirective", () => {
  let node: HTMLElement;
  let el: ElementRef;
  let directive: InViewportDirective;
  const text = "I am just a test data display here as a placeholder";
  let windowRef: WindowRef;
  const rectSpy = jasmine.createSpy("reacSpy");
  const cdRef = { detectChanges: () => {} };
  let zone: NgZone;

  beforeEach(() => {
    windowRef = (new FakeDOMStandardElement("window") as any) as WindowRef;

    windowRef.innerHeight = 768;
    windowRef.innerWidth = 1366;
    (<any>windowRef).addEventListener = () => {};
    rectSpy.and.returnValue({ left: 0, right: 1366, top: 0, bottom: 500 });
    node = document.createElement("p");
    node.innerText = text;
    el = new ElementRef(node);
    el.nativeElement.getBoundingClientRect = rectSpy;
    zone = new MockNgZone();

    directive = new InViewportDirective(windowRef, el, <any>cdRef, zone);
    directive.ngAfterViewInit();
  });

  describe("element in viewport", () => {
    it("should return true for `isInviewport` property", () => {
      directive.calcInViewportStatus();
      expect(directive.isInViewport).toBeTruthy();
    });

    it("should return false for `isOutViewport` property", () => {
      directive.calcInViewportStatus();
      expect(directive.isOutViewport).toBeFalsy();
    });
  });

  describe("element Not in viewport", () => {
    it("should return false for `isInViewport`", () => {
      rectSpy.and.returnValue({
        left: 0,
        right: 1366,
        top: 769,
        bottom: 1069
      });
      directive.calcInViewportStatus();
      expect(directive.isInViewport).toBeFalsy();

      rectSpy.and.returnValue({
        left: 1367,
        right: 2367,
        top: 0,
        bottom: 0
      });
      directive.calcInViewportStatus();
      expect(directive.isInViewport).toBeFalsy();

      rectSpy.and.returnValue({
        left: 0,
        right: 1366,
        top: -300,
        bottom: -100
      });
      directive.calcInViewportStatus();
      expect(directive.isInViewport).toBeFalsy();

      rectSpy.and.returnValue({
        left: -1000,
        right: -500,
        top: 0,
        bottom: 500
      });
      directive.calcInViewportStatus();
      expect(directive.isInViewport).toBeFalsy();
    });

    it("should return true for `isOutViewport` property", () => {
      rectSpy.and.returnValue({ left: 0, right: 1366, top: 769, bottom: 1069 });
      directive.calcInViewportStatus();
      expect(directive.isOutViewport).toBeTruthy();

      rectSpy.and.returnValue({ left: 1367, right: 2367, top: 0, bottom: 0 });
      directive.calcInViewportStatus();
      expect(directive.isOutViewport).toBeTruthy();

      rectSpy.and.returnValue({
        left: 0,
        right: 1366,
        top: -300,
        bottom: -100
      });
      directive.calcInViewportStatus();
      expect(directive.isOutViewport).toBeTruthy();

      rectSpy.and.returnValue({
        left: -1000,
        right: -500,
        top: 0,
        bottom: 500
      });
      directive.calcInViewportStatus();
      expect(directive.isOutViewport).toBeTruthy();
    });
  });
});
