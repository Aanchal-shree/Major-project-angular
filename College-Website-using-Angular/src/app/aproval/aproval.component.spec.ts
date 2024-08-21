import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovalComponent } from './aproval.component';

describe('AprovalComponent', () => {
  let component: AprovalComponent;
  let fixture: ComponentFixture<AprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprovalComponent]
    });
    fixture = TestBed.createComponent(AprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
