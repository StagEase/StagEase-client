import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaModalComponent } from './area-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

describe('AreaModalComponent', () => {
  let component: AreaModalComponent;
  let fixture: ComponentFixture<AreaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaModalComponent],
      imports: [HttpClientTestingModule, NgbAccordionModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AreaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
