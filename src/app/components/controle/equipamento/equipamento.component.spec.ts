import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoComponent } from './equipamento.component';

describe('EquipamentoComponent', () => {
  let component: EquipamentoComponent;
  let fixture: ComponentFixture<EquipamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipamentoComponent]
    });
    fixture = TestBed.createComponent(EquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
