import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Equipamento } from 'src/app/models/equipamento';
import { EquipamentoService } from 'src/app/services/equipamento.service';

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento.component.html',
  styleUrls: ['./equipamento.component.scss']
})
export class EquipamentoComponent {
  

  list: Equipamento[] = [];
  equipamentoSelecionada: Equipamento = new Equipamento();

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
    this.equipamentoSelecionada = new Equipamento();

    this.modal.open(modal, { size: 'lg' });
  }
}
