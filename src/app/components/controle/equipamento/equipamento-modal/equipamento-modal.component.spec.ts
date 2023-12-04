import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoModalComponent } from './equipamento-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Equipamento } from 'src/app/models/equipamento';
import { Distrito } from 'src/app/models/enums/distrito';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Area } from 'src/app/models/area';
import { Supervisor } from 'src/app/models/supervisor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

describe('EquipamentoModalComponent', () => {
  let component: EquipamentoModalComponent;
  let fixture: ComponentFixture<EquipamentoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipamentoModalComponent],
      imports: [HttpClientTestingModule, FormsModule, NgbModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(EquipamentoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {    
    let equipamento: Equipamento = new Equipamento();
    equipamento.id = 1;
    equipamento.cadastro = new Date('2023-01-01');
    equipamento.atualizado = new Date('2023-01-01');
    equipamento.ativo = true;
    equipamento.nomeEquipamento = "guante";
    equipamento.gerente = "marcelo";
    equipamento.distrito = Distrito.SUL;
    equipamento.contatoList = ["45-4322421"];
    equipamento.areaList = [];
    equipamento.supervisorList = [];
    equipamento.solicitacaoList = [];
    equipamento.descricao = "nao";
    component.equipamento = equipamento;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });


  it('Teste no null de @Input 2- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="gerente"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste no null de @Input 3- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="contato"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  

  it('Teste no null de @Input 4- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="descricao"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('debería cambiar el estado de las áreas seleccionadas correctamente', () => {
    // Mock de datos
    const areaMock = { id: 1, cadastro: new Date('2023-01-01'), atualizado: new Date('2023-01-01'), ativo: true, nomeArea: "medicina", solicitacaoList: []};
    component.areas = [areaMock];

    // Estado inicial
    expect(component.areaSelected).toEqual([]);

    // Llama al método toggleAreaSelection
    component.toggleAreaSelection(areaMock);

    // Verifica que el área se haya añadido a las áreas seleccionadas
    expect(component.areaSelected).toEqual([areaMock]);

    // Llama al método toggleAreaSelection nuevamente para quitar el área
    component.toggleAreaSelection(areaMock);

    // Verifica que el área se haya eliminado de las áreas seleccionadas
    expect(component.areaSelected).toEqual([]);
  });

  it('debería troca o estado de las supervisor seleccionadas correctamente', () => {
    const supervisorMock = { id: 1, cadastro: new Date('2023-01-01'), atualizado: new Date('2023-01-01'), ativo: true, nomeSupervisor: "marcelo", matricula: "34432", descricao: "nao", equipamentoList: [], solicitacaoList: []};
    component.supervisores = [supervisorMock];

    expect(component.supervisorSelected).toEqual([]);

    component.toggleSupervisorSelection(supervisorMock);

    expect(component.supervisorSelected).toEqual([supervisorMock]);

    component.toggleSupervisorSelection(supervisorMock);

    expect(component.supervisorSelected).toEqual([]);
  });

  it('componente depois do retornoAreaList', () => {
    const area: Area = { id: 1, cadastro: new Date('2023-01-01'), atualizado: new Date('2023-01-01'), ativo: true, nomeArea: "uniamerica", solicitacaoList: [] };

    component.retornoAreaList(area);

    expect(component.equipamento.areaList).toContain(area);
  });

  it('componente depois do retornoSupervisorList', () => {
    const supervisor: Supervisor = { id: 1, cadastro: new Date('2023-01-01'), atualizado: new Date('2023-01-01'), ativo: true, nomeSupervisor: "marcelo", matricula: "54321", descricao: "nao", equipamentoList: [], solicitacaoList: [] };

    component.retornoSupervisorList(supervisor);

    expect(component.equipamento.supervisorList).toContain(supervisor);
  });

  beforeEach(() => {
    let equipamento = new Equipamento();
    equipamento.id = 1;
    equipamento.cadastro = new Date('2023-01-01');
    equipamento.atualizado = new Date('2023-01-01');
    equipamento.ativo = true;
    equipamento.nomeEquipamento = "guante";
    equipamento.gerente = "marcelo";
    equipamento.distrito = Distrito.SUL;
    equipamento.contatoList = ["45-4322421"];
    equipamento.areaList = [];
    equipamento.supervisorList = [];
    equipamento.solicitacaoList = [];
    equipamento.descricao = "nao";
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(equipamento));
    spyOn(httpSpy, 'put').and.returnValue(of(equipamento));

    fixture.detectChanges();
  });
});