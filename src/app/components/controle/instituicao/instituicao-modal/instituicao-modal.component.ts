import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { InstituicaoDeEnsino } from 'src/app/models/instituicao-de-ensino';
import { InstituicaoDeEnsinoService } from 'src/app/services/instituicao-de-ensino.service';

@Component({
  selector: 'app-instituicao-modal',
  templateUrl: './instituicao-modal.component.html',
  styleUrls: ['./instituicao-modal.component.scss']
})
export class InstituicaoModalComponent {
  @Input() instituicao: InstituicaoDeEnsino = new InstituicaoDeEnsino();
  @Output() retorno = new EventEmitter<InstituicaoDeEnsino>();

  instituicaoService = inject(InstituicaoDeEnsinoService);

  save() {
    this.instituicaoService
      .create(this.instituicao)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    location.reload();
  }
}
