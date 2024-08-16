import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsbitComponent } from './aboutsbit.component';

describe('AboutsbitComponent', () => {
  let component: AboutsbitComponent;
  let fixture: ComponentFixture<AboutsbitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutsbitComponent]
    });
    fixture = TestBed.createComponent(AboutsbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
