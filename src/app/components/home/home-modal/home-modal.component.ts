import { Component, inject } from '@angular/core';
import { Area } from 'src/app/models/area';
import { Situacao } from 'src/app/models/enums/situacao';
import { Equipamento } from 'src/app/models/equipamento';
import { InstituicaoDeEnsino } from 'src/app/models/instituicao-de-ensino';
import { Solicitacao } from 'src/app/models/solicitacao';
import { Supervisor } from 'src/app/models/supervisor';
import { AreaService } from 'src/app/services/area.service';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { InstituicaoDeEnsinoService } from 'src/app/services/instituicao-de-ensino.service';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.scss'],
})
export class HomeModalComponent {
  //instancias para receberem a lista de objetos, aqui somente um objeto pode ser selecionado
  equipamentos: Equipamento[] = [];
  areas: Area[] = [];
  supervisores: Supervisor[] = [];
  instituicoes: InstituicaoDeEnsino[] = [];
  situacoes = Situacao;
  situacaoSelected!: Situacao;

  //instanciando as services
  equipamentoService = inject(EquipamentoService);
  areaService = inject(AreaService);
  supervisorService = inject(SupervisorService);
  instituicaoService = inject(InstituicaoDeEnsinoService);
  solicitacaoService = inject(SolicitacaoService);

  solicitacao: Solicitacao = new Solicitacao();

  ngOnInit() {
    this.getEquipamentos();
    this.getAreas();
    this.getSupervisores();
    this.getInstituicoes();
  }

  save() {
    this.solicitacaoService
      .create(this.solicitacao)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    location.reload();
  }

  getEquipamentos() {
    this.equipamentoService
      .list()
      .then((response) => {
        this.equipamentos = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAreas() {
    this.areaService
      .list()
      .then((response) => {
        this.areas = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getSupervisores() {
    this.supervisorService
      .list()
      .then((response) => {
        this.supervisores = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getInstituicoes() {
    this.instituicaoService
      .list()
      .then((response) => {
        this.instituicoes = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
