import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Area } from 'src/app/models/area';
import { Distrito } from 'src/app/models/enums/distrito';
import { Equipamento } from 'src/app/models/equipamento';
import { Supervisor } from 'src/app/models/supervisor';
import { AreaService } from 'src/app/services/area.service';
import { EquipamentoService } from 'src/app/services/equipamento.service';
import { SupervisorService } from 'src/app/services/supervisor.service';

@Component({
  selector: 'app-equipamento-modal',
  templateUrl: './equipamento-modal.component.html',
  styleUrls: ['./equipamento-modal.component.scss'],
})
export class EquipamentoModalComponent {
  @Input() equipamento: Equipamento = new Equipamento();
  @Output() retorno = new EventEmitter<Equipamento>();

  areas: Area[] = [];
  supervisores: Supervisor[] = [];
  contatosTemp: string[] = [''];

  areaSelected: Area[] = [];
  supervisorSelected: Supervisor[] = [];

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  equipamentoService = inject(EquipamentoService);
  areaService = inject(AreaService);
  supervisorService = inject(SupervisorService);

  ngOnInit() {
    this.getAreas();
    this.getSupervisores();
  }

  getAreas() {
    this.areaService
      .list()
      .then((response) => {
        this.areas = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSupervisores() {
    this.supervisorService
      .list()
      .then((response) => {
        this.supervisores = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDistritoEnum(): string[] {
    return Object.values(Distrito).filter(
      (value) => typeof value === 'string'
    ) as string[];
  }

  adicionarContato() {
    this.contatosTemp.push('');
  }

  removerContato(index: number) {
    this.contatosTemp.splice(index, 1);
  }

  toggleAreaSelection(area: Area) {
    if (this.areaSelected.includes(area)) {
      this.areaSelected = this.areaSelected.filter((a) => a !== area);
    } else {
      this.areaSelected.push(area);
    }
  }

  toggleSupervisorSelection(supervisor: Supervisor) {
    if (this.supervisorSelected.includes(supervisor)) {
      this.supervisorSelected = this.supervisorSelected.filter(
        (s) => s !== supervisor
      );
    } else {
      this.supervisorSelected.push(supervisor);
    }
  }

  save() {
    this.equipamento.contatoList = [...this.contatosTemp];
    this.equipamento.areaList = this.areaSelected;

    this.equipamentoService
      .create(this.equipamento)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.equipamento.contatoList = [];
  }
<<<<<<< HEAD

  retornoAreaList(area: Area) {
    if (this.equipamento.areaList == null)
      this.equipamento.areaList = [];

    this.equipamento.areaList.push(area);
    if (this.modalRef) {
      this.modalRef.dismiss();
    }
  }

  retornoSupervisorList(supervisor: Supervisor) {

    if (this.equipamento.supervisorList == null)
      this.equipamento.supervisorList = [];

    this.equipamento.supervisorList.push(supervisor);
    if (this.modalRef) {
      this.modalRef.dismiss();
    }
  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}
=======
}
>>>>>>> bd1e81b6a2fee85ef93a9920159755539248b054
