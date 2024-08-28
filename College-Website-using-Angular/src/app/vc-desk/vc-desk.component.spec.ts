import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcDeskComponent } from './vc-desk.component';

describe('VcDeskComponent', () => {
  let component: VcDeskComponent;
  let fixture: ComponentFixture<VcDeskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VcDeskComponent]
    });
    fixture = TestBed.createComponent(VcDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
