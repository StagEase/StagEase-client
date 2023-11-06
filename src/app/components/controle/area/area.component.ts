import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Area } from 'src/app/models/area';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent {
  list: Area[] = [];
  areaSelecionada: Area = new Area();

  service = inject(AreaService);
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
    this.areaSelecionada = new Area();

    this.modal.open(modal, { size: 'lg' });
  }

  openDeleteConfirmationModal(modal: any, area: Area) {
    this.areaSelecionada = area;
    console.log('Equipamento selecionado:', this.areaSelecionada);
    this.modal.open(modal, { size: 'lg' });
  }

  deletarArea() {
    if (this.areaSelecionada) {
      console.log('Excluindo equipamento', this.areaSelecionada);
      console.log(this.areaSelecionada.id);

      this.service
        .delete(this.areaSelecionada.id)
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
