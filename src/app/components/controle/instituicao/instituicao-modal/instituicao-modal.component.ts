import { Component, inject } from '@angular/core';
import { InstituicaoDeEnsino } from 'src/app/models/instituicao-de-ensino';
import { InstituicaoDeEnsinoService } from 'src/app/services/instituicao-de-ensino.service';

@Component({
  selector: 'app-instituicao-modal',
  templateUrl: './instituicao-modal.component.html',
  styleUrls: ['./instituicao-modal.component.scss']
})
export class InstituicaoModalComponent {
  instituicao: InstituicaoDeEnsino = new InstituicaoDeEnsino();

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
