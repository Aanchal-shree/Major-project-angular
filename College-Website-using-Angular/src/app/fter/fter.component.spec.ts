import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FterComponent } from './fter.component';

describe('FterComponent', () => {
  let component: FterComponent;
  let fixture: ComponentFixture<FterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FterComponent]
    });
    fixture = TestBed.createComponent(FterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
