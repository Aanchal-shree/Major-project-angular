import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniRegistrationComponent } from './alumni-registration.component';

describe('AlumniRegistrationComponent', () => {
  let component: AlumniRegistrationComponent;
  let fixture: ComponentFixture<AlumniRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumniRegistrationComponent]
    });
    fixture = TestBed.createComponent(AlumniRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
