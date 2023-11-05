import { Abstract } from './abstract';
import { Solicitacao } from './solicitacao';

export class InstituicaoDeEnsino extends Abstract {
  nomeIe!: String;
  solicitacaiList!: Solicitacao[];
}
