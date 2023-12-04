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

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual("guante");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="nome"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 2 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="gerente"]'));
    expect(elemento.nativeElement.ngModel).toEqual("marcelo");
  });

  it('Teste no null de @Input 2- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="gerente"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  it('Teste de 3 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="contato"]'));
    expect(elemento.nativeElement.ngModel).toEqual(["45-4322421"]);
  });

  it('Teste no null de @Input 3- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="contato"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  
  it('Teste de 4 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="descricao"]'));
    expect(elemento.nativeElement.ngModel).toEqual("nao");
  });

  it('Teste no null de @Input 4- Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="descricao"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
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
