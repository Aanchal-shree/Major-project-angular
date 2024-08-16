import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marquee2Component } from './marquee2.component';

describe('Marquee2Component', () => {
  let component: Marquee2Component;
  let fixture: ComponentFixture<Marquee2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Marquee2Component]
    });
    fixture = TestBed.createComponent(Marquee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
