import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolicitacaoService } from './../../services/solicitacao.service';
import { Solicitacao } from './../../models/solicitacao';
import { Situacao } from 'src/app/models/enums/situacao';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  solicitacaoList: Solicitacao[] = [];
  solicitacaoSelecionada: Solicitacao = new Solicitacao();

  modal = inject(NgbModal);
  service = inject(SolicitacaoService);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.service
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

  openCreateModal(modal: any) {
    this.solicitacaoSelecionada = new Solicitacao();

    this.modal.open(modal, { size: 'lg' });
  }

  openDeleteConfirmationModal(modal: any, solicitacao: Solicitacao) {
    this.solicitacaoSelecionada = solicitacao;
    console.log('Equipamento selecionado:', this.solicitacaoSelecionada);
    this.modal.open(modal, { size: 'lg' });
  }

  deletarEquipamento() {
    if (this.solicitacaoSelecionada) {
      console.log('Excluindo equipamento', this.solicitacaoSelecionada);
      console.log(this.solicitacaoSelecionada.id);

      this.service
        .delete(this.solicitacaoSelecionada.id)
        .then(() => {
          console.log('Equipamento excluído com sucesso');
          this.modal.dismissAll('Sim');
          location.reload();
        })
        .catch((error) => {
          console.error('Erro ao excluir o equipamento:', error);
          this.modal.dismissAll('Sim');
        });
    }
  }
}
