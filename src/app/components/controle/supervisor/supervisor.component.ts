import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Supervisor } from 'src/app/models/supervisor';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss'],
})
export class SupervisorComponent {
  @Output() retorno = new EventEmitter<Supervisor>();
  @Input() modoLancamento: boolean = false;

  list: Supervisor[] = [];
  supervisorSelecionado: Supervisor = new Supervisor();
  objetoSelecionadoParaEdicao: Supervisor = new Supervisor();
  indiceSelecionadoParaEdicao!: number;

  service = inject(SupervisorService);
  modalRef!: NgbModalRef;
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
    this.supervisorSelecionado = new Supervisor();

    this.modal.open(modal, { size: 'lg' });
  }

  lancamento(supervisor: Supervisor) {
    this.retorno.emit(supervisor);
  }

  openDeleteConfirmationModal(modal: any, supervisor: Supervisor) {
    this.supervisorSelecionado = supervisor;
    console.log('Equipamento selecionado:', this.supervisorSelecionado);
    this.modal.open(modal, { size: 'lg' });
  }

  editar(modal: any, supervisor: Supervisor, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...supervisor };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modal.open(modal, { size: 'md' });
  }
  addOuEditarSupervisor(supervisor: Supervisor) {
    this.listAll();
    this.modal.dismissAll();
  }

  deletarSupervisor() {
    if (this.supervisorSelecionado) {
      console.log('Excluindo equipamento', this.supervisorSelecionado);
      console.log(this.supervisorSelecionado.id);

      this.service
        .delete(this.supervisorSelecionado.id)
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
