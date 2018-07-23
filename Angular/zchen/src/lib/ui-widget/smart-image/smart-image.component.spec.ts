import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SmartImageComponent } from './smart-image.component';
import { InViewportDirective, WindowRef } from '@zchen/common';

describe('SmartImageComponent', () => {
  let component: SmartImageComponent;
  let fixture: ComponentFixture<SmartImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmartImageComponent, InViewportDirective],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [WindowRef]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
