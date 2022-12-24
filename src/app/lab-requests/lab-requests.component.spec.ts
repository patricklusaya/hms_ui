import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRequestsComponent } from './lab-requests.component';

describe('LabRequestsComponent', () => {
  let component: LabRequestsComponent;
  let fixture: ComponentFixture<LabRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
