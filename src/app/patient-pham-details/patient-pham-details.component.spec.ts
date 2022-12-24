import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPhamDetailsComponent } from './patient-pham-details.component';

describe('PatientPhamDetailsComponent', () => {
  let component: PatientPhamDetailsComponent;
  let fixture: ComponentFixture<PatientPhamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPhamDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPhamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
