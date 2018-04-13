import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { SmartImageComponent } from "./smart-image.component";
import { SharedModule } from "../../common";
import { By } from "@angular/platform-browser";

describe("SmartImageComponent", () => {
  let component: SmartImageComponent;
  let fixture: ComponentFixture<SmartImageComponent>;

  const dummy: string = "http://via.placeholder.com/35x15?text=placeholder";
  const src: string = "http://via.placeholder.com/700x500";

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule.forRoot()],
        declarations: [SmartImageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartImageComponent);
    component = fixture.componentInstance;
    component.dummy = dummy;
    component.src = src;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should preload dummy after inviewport directive init", () => {
    const spy = spyOn(component, "onImagePreload");
    component.onInViewportChange(true);
    const dummyImgEl = fixture.debugElement.query(By.css(".img-dummy"));
    dummyImgEl.triggerEventHandler("load", null);
    expect(spy).toHaveBeenCalled();
  });


});
