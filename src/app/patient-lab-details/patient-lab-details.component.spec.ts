import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLabDetailsComponent } from './patient-lab-details.component';

describe('PatientLabDetailsComponent', () => {
  let component: PatientLabDetailsComponent;
  let fixture: ComponentFixture<PatientLabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientLabDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientLabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
