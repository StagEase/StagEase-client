import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { InstituicaoDeEnsino } from 'src/app/models/instituicao-de-ensino';
import { InstituicaoDeEnsinoService } from 'src/app/services/instituicao-de-ensino.service';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.scss']
})
export class InstituicaoComponent {

  @Output() retorno = new EventEmitter<InstituicaoDeEnsino>();
  @Input() modoLancamento: boolean = false;

  lista: InstituicaoDeEnsino[] = [];

  instituicaoService = inject(InstituicaoDeEnsinoService);

  constructor() {
    this.listAll();
  }

  async listAll() {
    try {
      const response = await this.instituicaoService.list();
      this.lista = response.data;
    } catch (error) {
      alert('Tratamento de erro de exemplo. Observa o erro na consola.');
      console.error(error);
    }
  }

}
