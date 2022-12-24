import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhamRequestsComponent } from './pham-requests.component';

describe('PhamRequestsComponent', () => {
  let component: PhamRequestsComponent;
  let fixture: ComponentFixture<PhamRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhamRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhamRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
