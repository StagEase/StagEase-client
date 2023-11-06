import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Area } from 'src/app/models/area';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent {
  @Output() retorno = new EventEmitter<Area>();
  @Input() modoLancamento: boolean = false;

  objetoSelecionadoParaEdicao: Area = new Area();
  indiceSelecionadoParaEdicao!: number;

  list: Area[] = [];
  areaSelecionada: Area = new Area();

  service = inject(AreaService);
  modal = inject(NgbModal);
  modalRef!: NgbModalRef;

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

  lancamento(area: Area) {
    this.retorno.emit(area);
  }

  openDeleteConfirmationModal(modal: any, area: Area) {
    this.areaSelecionada = area;
    console.log('Equipamento selecionado:', this.areaSelecionada);
    this.modal.open(modal, { size: 'lg' });
  }

  editar(modal: any, area: Area, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...area };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modal.open(modal, { size: 'md' });
  }

  addOuEditarArea(area: Area) {
    this.listAll();
    this.modal.dismissAll();
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
