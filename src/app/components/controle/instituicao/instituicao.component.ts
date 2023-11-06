import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstituicaoDeEnsino } from 'src/app/models/instituicao-de-ensino';
import { InstituicaoDeEnsinoService } from 'src/app/services/instituicao-de-ensino.service';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.scss']
})
export class InstituicaoComponent {

  list: InstituicaoDeEnsino[] = [];
  instituicaoSelecionada: InstituicaoDeEnsino = new InstituicaoDeEnsino();

  service = inject(InstituicaoDeEnsinoService);
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
    this.instituicaoSelecionada = new InstituicaoDeEnsino();

    this.modal.open(modal, { size: 'lg' });
  }

}
