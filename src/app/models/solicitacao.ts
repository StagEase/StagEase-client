import { Abstract } from './abstract';
import { Area } from './area';
import { Situacao } from './enums/situacao';
import { InstituicaoDeEnsino } from './instituicao-de-ensino';
import { Supervisor } from './supervisor';
import { Ubs } from './ubs';

export class Solicitacao extends Abstract {
  ubs!: Ubs;
  area!: Area;
  supervisor!: Supervisor;
  qntdEstagiarios!: number;
  instituicaoDeEnsino!: InstituicaoDeEnsino;
  dataInicio!: Date;
  dataFim!: Date;
  inicioExpediente!: String;
  fimExpediente!: String;
  situacao!: Situacao;
  descricao!: String;
}
