import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Area } from 'src/app/models/area';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-modal',
  templateUrl: './area-modal.component.html',
  styleUrls: ['./area-modal.component.scss'],
})
export class AreaModalComponent {
  @Input() area: Area = new Area();
  @Output() retorno = new EventEmitter<Area>();

  areaService = inject(AreaService);

  save() {
    this.areaService
      .create(this.area)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    location.reload();
  }
}
