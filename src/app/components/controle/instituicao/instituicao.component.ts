import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { InstituicaoDeEnsino } from 'src/app/models/instituicao-de-ensino';
import { InstituicaoDeEnsinoService } from 'src/app/services/instituicao-de-ensino.service';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.scss'],
})
export class InstituicaoComponent {
  @Output() retorno = new EventEmitter<InstituicaoDeEnsino>();
  @Input() modoLancamento: boolean = false;

  objetoSelecionadoParaEdicao: InstituicaoDeEnsino = new InstituicaoDeEnsino();
  indiceSelecionadoParaEdicao!: number;
  list: InstituicaoDeEnsino[] = [];
  instituicaoSelecionada: InstituicaoDeEnsino = new InstituicaoDeEnsino();

  service = inject(InstituicaoDeEnsinoService);
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
    this.instituicaoSelecionada = new InstituicaoDeEnsino();

    this.modal.open(modal, { size: 'lg' });
  }

  openDeleteConfirmationModal(modal: any, instituicao: InstituicaoDeEnsino) {
    this.instituicaoSelecionada = instituicao;
    console.log('Equipamento selecionado:', this.instituicaoSelecionada);
    this.modal.open(modal, { size: 'lg' });
  }

  editar(modal: any, instituicao: InstituicaoDeEnsino, indice: number) {
    this.objetoSelecionadoParaEdicao = { ...instituicao };
    this.indiceSelecionadoParaEdicao = indice;

    this.modalRef = this.modal.open(modal, { size: 'md' });
  }

  addOuEditarInstituicao(instituicao: InstituicaoDeEnsino) {
    this.listAll();
    this.modal.dismissAll();
  }

  deletarIE() {
    if (this.instituicaoSelecionada) {
      console.log('Excluindo equipamento', this.instituicaoSelecionada);
      console.log(this.instituicaoSelecionada.id);

      this.service
        .delete(this.instituicaoSelecionada.id)
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
