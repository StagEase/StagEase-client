import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoModalComponent } from './equipamento-modal.component';

describe('EquipamentoModalComponent', () => {
  let component: EquipamentoModalComponent;
  let fixture: ComponentFixture<EquipamentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipamentoModalComponent]
    });
    fixture = TestBed.createComponent(EquipamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
