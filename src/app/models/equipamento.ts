import { Abstract } from './abstract';
import { Area } from './area';
import { Distrito } from './enums/distrito';
import { Solicitacao } from './solicitacao';
import { Supervisor } from './supervisor';

export class Equipamento extends Abstract {
  nomeEquipamento!: String;
  gerente!: String;
  distrito!: Distrito;
  contatoList!: String[];
  areaList!: Area[];
  supervisorList!: Supervisor[];
  solicitacaoList!: Solicitacao[];
  descricao!: String;
}
