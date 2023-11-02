import { Abstract } from './abstract';
import { Solicitacao } from './solicitacao';
import { Ubs } from './ubs';

export class Supervisor extends Abstract {
  nomeSupervisor!: String;
  matricula!: String;
  descricao!: String;
  ubsList!: Ubs[];
  solicitacaoList!: Solicitacao[];
}
