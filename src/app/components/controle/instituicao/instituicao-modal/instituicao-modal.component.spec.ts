import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoModalComponent } from './instituicao-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('InstituicaoModalComponent', () => {
  let component: InstituicaoModalComponent;
  let fixture: ComponentFixture<InstituicaoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituicaoModalComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(InstituicaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
