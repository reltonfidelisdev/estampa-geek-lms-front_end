import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCourseCardComponent } from './slide-course-card.component';

describe('SlideCourseCardComponent', () => {
  let component: SlideCourseCardComponent;
  let fixture: ComponentFixture<SlideCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideCourseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
