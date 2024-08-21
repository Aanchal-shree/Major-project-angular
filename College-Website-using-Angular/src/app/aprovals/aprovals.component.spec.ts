import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovalsComponent } from './aprovals.component';

describe('AprovalsComponent', () => {
  let component: AprovalsComponent;
  let fixture: ComponentFixture<AprovalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprovalsComponent]
    });
    fixture = TestBed.createComponent(AprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
