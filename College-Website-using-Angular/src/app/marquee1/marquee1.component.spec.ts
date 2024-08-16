import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marquee1Component } from './marquee1.component';

describe('Marquee1Component', () => {
  let component: Marquee1Component;
  let fixture: ComponentFixture<Marquee1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Marquee1Component]
    });
    fixture = TestBed.createComponent(Marquee1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
