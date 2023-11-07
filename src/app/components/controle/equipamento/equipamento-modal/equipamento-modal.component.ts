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
  styleUrls: ['./equipamento-modal.component.scss']
})
export class EquipamentoModalComponent {
 @Input() equipamento: Equipamento = new Equipamento();
 @Output() retorno = new EventEmitter<Equipamento>();

  areas: Area[] = [];
  supervisores: Supervisor[] = [];
  distritoValues = Object.values(Distrito);
  equipamentoSelecionado: Equipamento = new Equipamento();
  distritoEnum = Distrito; 
  selectedDistrito!: Distrito;
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  equipamentoService = inject(EquipamentoService);
  areaService = inject(AreaService)
  supervisorService = inject(SupervisorService)

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

  save() {
    this.equipamentoService
      .create(this.equipamento)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    location.reload();
  }

  retornoAreaList(area: Area) {
    if (this.equipamento.areaList == null)
      this.equipamento.areaList = [];

    this.equipamento.areaList.push(area);
    this.modalRef.dismiss();
  }

  retornoSupervisorList(supervisor: Supervisor) {

    if (this.equipamento.supervisorList == null)
      this.equipamento.supervisorList = [];

    this.equipamento.supervisorList.push(supervisor);
    this.modalRef.dismiss();
  }


  lancar(modal: any) {
    this.modalRef = this.modalService.open(modal, { size: 'lg' });
  }

}