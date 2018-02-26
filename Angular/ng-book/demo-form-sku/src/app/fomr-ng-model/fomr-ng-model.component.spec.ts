import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrNgModelComponent } from './fomr-ng-model.component';

describe('FomrNgModelComponent', () => {
  let component: FomrNgModelComponent;
  let fixture: ComponentFixture<FomrNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomrNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomrNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
