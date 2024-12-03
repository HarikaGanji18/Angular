import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student3Component } from './student3.component';

describe('Student3Component', () => {
  let component: Student3Component;
  let fixture: ComponentFixture<Student3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Student3Component]
    });
    fixture = TestBed.createComponent(Student3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
