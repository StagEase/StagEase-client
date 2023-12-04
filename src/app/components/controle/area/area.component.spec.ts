import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaComponent } from './area.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Area } from 'src/app/models/area';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaService } from 'src/app/services/area.service';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

describe('AreaComponent', () => {
  let component: AreaComponent;
  let fixture: ComponentFixture<AreaComponent>;
  let areaService: AreaService;
  let modalService: NgbModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaComponent],
      imports: [HttpClientTestingModule, NgbModule, NgbAccordionModule],
      providers: [AreaService, NgbModal],
    });
    fixture = TestBed.createComponent(AreaComponent);
    component = fixture.componentInstance;
    areaService = TestBed.inject(AreaService);
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('metodo lancamento', () => {
    const areaMock: Area = { id: 1, cadastro: new Date('2023-01-01'), atualizado: new Date('2023-01-01'), ativo: true, nomeArea: "medicina", solicitacaoList: []}; 

    spyOn(component.retorno, 'emit');
    component.lancamento(areaMock);

    expect(component.retorno.emit).toHaveBeenCalledWith(areaMock);
  });
});
