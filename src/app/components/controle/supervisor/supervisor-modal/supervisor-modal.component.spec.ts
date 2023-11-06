import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorModalComponent } from './supervisor-modal.component';

describe('SupervisorModalComponent', () => {
  let component: SupervisorModalComponent;
  let fixture: ComponentFixture<SupervisorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorModalComponent]
    });
    fixture = TestBed.createComponent(SupervisorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
