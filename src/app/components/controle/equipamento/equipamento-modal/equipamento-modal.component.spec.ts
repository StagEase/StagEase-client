import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoModalComponent } from './equipamento-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EquipamentoModalComponent', () => {
  let component: EquipamentoModalComponent;
  let fixture: ComponentFixture<EquipamentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipamentoModalComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EquipamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
