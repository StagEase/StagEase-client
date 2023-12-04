import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AreaModalComponent } from './area-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';
import { Area } from 'src/app/models/area';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

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

  beforeEach(() => {    
    let area: Area = new Area();
    area.id = 1;
    area.cadastro = new Date('2023-01-01');
    area.atualizado = new Date('2023-01-01');
    area.ativo = true;
    area.nomeArea = "uniamerica";
    area.solicitacaoList = [];
    component.area = area;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Teste de 1 @Input - Interpolacao no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="nome"]'));
    expect(elemento.nativeElement.ngModel).toEqual("uniamerica");
  });

  it('Teste no null de @Input 1 - Interpolação no template', () => {
    let elemento = fixture.debugElement.query(By.css('input[id="nome"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });


  beforeEach(() => {
    let area = new Area();
    area.id = 1;
    area.cadastro = new Date('2023-01-01');
    area.atualizado = new Date('2023-01-01');
    area.ativo = true;
    area.nomeArea = "uniamerica";
    area.solicitacaoList = [];
  
    const httpSpy = TestBed.inject(HttpClient)
    spyOn(httpSpy, 'post').and.returnValue(of(area));
    spyOn(httpSpy, 'put').and.returnValue(of(area));

    fixture.detectChanges();
  });
});
