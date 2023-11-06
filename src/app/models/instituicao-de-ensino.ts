import { Abstract } from './abstract';
import { Solicitacao } from './solicitacao';

export class InstituicaoDeEnsino extends Abstract {
  nome!: string;
  solicitacaiList!: Solicitacao[];
}
