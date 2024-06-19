import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolicitacaoService } from './../../services/solicitacao.service';
import { Solicitacao } from './../../models/solicitacao';
import { Situacao } from 'src/app/models/enums/situacao';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  solicitacaoList: Solicitacao[] = [];
  solicitacaoSelecionada: Solicitacao = new Solicitacao();

  modal = inject(NgbModal);
  service = inject(SolicitacaoService);

  constructor(private keycloakService: KeycloakService) {
    this.listAll();
  }

  ngOnInit(): void {
    this.saveToken();
  }

  async saveToken() {
    try {
      const token = await this.keycloakService.getToken();
      console.log('Token JWT:', token);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Erro ao obter o token JWT:', error);
    }
  }

  listAll() {
    this.service
      .list()
      .then((response) => {
        this.solicitacaoList = response.data;
        console.log(response.data);
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
      return 'blue';
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
