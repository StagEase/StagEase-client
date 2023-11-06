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

  @Output() retorno = new EventEmitter<Area>();
  @Input() modoLancamento: boolean = false;
  
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

  lancamento(area: Area){
    this.retorno.emit(area);
  }
  
}
