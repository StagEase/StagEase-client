import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorModalComponent } from './supervisor-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SupervisorModalComponent', () => {
  let component: SupervisorModalComponent;
  let fixture: ComponentFixture<SupervisorModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorModalComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SupervisorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
