import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorComponent } from './supervisor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { Supervisor } from 'src/app/models/supervisor';

describe('SupervisorComponent', () => {
  let component: SupervisorComponent;
  let fixture: ComponentFixture<SupervisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorComponent],
      imports: [HttpClientTestingModule, NgbAccordionModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(SupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const supervisorMock: Supervisor = { id: 1, cadastro: new Date('2023-01-01'), atualizado: new Date('2023-01-01'), ativo: true, nomeSupervisor: "marcelo", matricula: "34343", descricao: "Nao", equipamentoList: [], solicitacaoList: []}; 

    spyOn(component.retorno, 'emit');
    component.lancamento(supervisorMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(supervisorMock);
  });
});
