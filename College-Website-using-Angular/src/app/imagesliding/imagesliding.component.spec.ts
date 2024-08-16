import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageslidingComponent } from './imagesliding.component';

describe('ImageslidingComponent', () => {
  let component: ImageslidingComponent;
  let fixture: ComponentFixture<ImageslidingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageslidingComponent]
    });
    fixture = TestBed.createComponent(ImageslidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
