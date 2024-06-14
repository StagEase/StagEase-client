import { Abstract } from './abstract';
import { Solicitacao } from './solicitacao';
import { Equipamento } from './equipamento';

export class Supervisor extends Abstract {
  nomeSupervisor!: String;
  matricula!: String;
  descricao!: String;
}
