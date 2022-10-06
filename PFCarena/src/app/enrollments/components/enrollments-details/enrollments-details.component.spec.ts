import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsDetailsComponent } from './enrollments-details.component';

describe('EnrollmentsDetailsComponent', () => {
  let component: EnrollmentsDetailsComponent;
  let fixture: ComponentFixture<EnrollmentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
