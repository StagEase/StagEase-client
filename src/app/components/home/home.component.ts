import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolicitacaoService } from './../../services/solicitacao.service';
import { Solicitacao } from './../../models/solicitacao';
import { Situacao } from 'src/app/models/enums/situacao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  solicitacaoList: Solicitacao[] = [];
  modal: any;

  constructor(
    private solicitacaoService: SolicitacaoService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
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

  getCorComBaseNaSituacao(situacao: Situacao): string {
    const situacaoString = situacao.toString();
    if (situacaoString === 'LIBERADO') {
      return 'green';
    } else if (situacaoString === 'PENDENTE') {
      return 'yellow';
    } else if (situacaoString === 'NEGADO') {
      return 'red';
    } else if (situacaoString === 'CONCLUIDO') {
      return 'white';
    } else {
      return 'black';
    }
  }
}
