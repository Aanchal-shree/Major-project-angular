import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeskComponent } from './student-desk.component';

describe('StudentDeskComponent', () => {
  let component: StudentDeskComponent;
  let fixture: ComponentFixture<StudentDeskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDeskComponent]
    });
    fixture = TestBed.createComponent(StudentDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
