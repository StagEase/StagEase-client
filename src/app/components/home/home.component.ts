import { InstituicaoDeEnsinoService } from './../../services/instituicao-de-ensino.service';
import { SupervisorService } from './../../services/supervisor.service';
import { AreaService } from './../../services/area.service';
import { Supervisor } from './../../models/supervisor';
import { SolicitacaoService } from './../../services/solicitacao.service';
import { Solicitacao } from './../../models/solicitacao';
import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Equipamento } from 'src/app/models/equipamento';
import { Area } from 'src/app/models/area';
import { InstituicaoDeEnsino } from 'src/app/models/instituicao-de-ensino';
import { EquipamentoService } from 'src/app/services/equipamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  solicitacaoList: Solicitacao[] = [];
  equipamentoList: Equipamento[] = [];
  areaList: Area[] = [];
  supervisorList: Supervisor[] = [];
  InstituicaoDeEnsinoList: InstituicaoDeEnsino[] = [];

  modal = inject(NgbModal);

  solicitacaoService = inject(SolicitacaoService);
  equipamentoService = inject(EquipamentoService);
  areaService = inject(AreaService);
  supervisorService = inject(SupervisorService);
  instituicaoDeEnsinoService = inject(InstituicaoDeEnsinoService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.solicitacaoService
    .list()
    .then((response) => {
      this.solicitacaoList = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
