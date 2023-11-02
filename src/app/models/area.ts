import { Abstract } from './abstract';
import { Solicitacao } from './solicitacao';

export class Area extends Abstract {
  nomeArea!: String;
  solicitacaoList!: Solicitacao[];
}
