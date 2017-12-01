import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniterUploadComponent } from './moniter-upload.component';

describe('MoniterUploadComponent', () => {
  let component: MoniterUploadComponent;
  let fixture: ComponentFixture<MoniterUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoniterUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniterUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
