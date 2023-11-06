import { Abstract } from './abstract';
import { Solicitacao } from './solicitacao';

export class InstituicaoDeEnsino extends Abstract {
  nomeIe!: string;
  solicitacaiList!: Solicitacao[];
}