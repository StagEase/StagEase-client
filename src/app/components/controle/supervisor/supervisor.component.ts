import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Supervisor } from 'src/app/models/supervisor';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent {

  list: Supervisor[] = [];
  supervisorSelecionada: Supervisor = new Supervisor();

  service = inject(SupervisorService);
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
    this.supervisorSelecionada = new Supervisor();

    this.modal.open(modal, { size: 'lg' });
  }

}
