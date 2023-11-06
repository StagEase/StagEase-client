import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Equipamento } from 'src/app/models/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss'],
})
export class EquipamentoComponent {
  list: Equipamento[] = [];
  contatosDoEquipamento: String[] = [];
  equipamentoSelecionado: Equipamento = new Equipamento();

  service = inject(EquipamentoService);
  modal = inject(NgbModal);

  constructor() {
    this.listAll();
  }

  listAll() {
    this.service
      .list()
      .then((response) => {
        this.list = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openCreateModal(modal: any) {
    this.equipamentoSelecionado = new Equipamento();

    this.modal.open(modal, { size: 'lg' });
  }

  openRegularModal(modal: any, equipamento: Equipamento) {
    this.contatosDoEquipamento = equipamento.contatoList;

    this.modal.open(modal, { size: 'lg' });
  }

  openDeleteConfirmationModal(modal: any, equipamento: Equipamento) {
    this.equipamentoSelecionado = equipamento;
    console.log('Equipamento selecionado:', this.equipamentoSelecionado);
    this.modal.open(modal, { size: 'lg' });
  }

  deletarEquipamento() {
    if (this.equipamentoSelecionado) {
      console.log('Excluindo equipamento', this.equipamentoSelecionado);
      console.log(this.equipamentoSelecionado.id);

      this.service
        .delete(this.equipamentoSelecionado.id)
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
