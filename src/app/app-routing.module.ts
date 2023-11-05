import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { AreaComponent } from './components/controle/area/area.component';
import { SupervisorComponent } from './components/controle/supervisor/supervisor.component';
import { InstituicaoComponent } from './components/controle/instituicao/instituicao.component';
import { EquipamentoComponent } from './components/controle/equipamento/equipamento.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'controle',
        children: [
          { path: 'area', component: AreaComponent },
          { path: 'ie', component: InstituicaoComponent },
          { path: 'supervisor', component: SupervisorComponent },
          { path: 'equipamento', component: EquipamentoComponent },
        ],
      },
      {
        path: 'inicio',
        children: [
          { path: 'solicitacao', component: HomeComponent }
        ],
      }
    ],
  },

  { path: 'saiu', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
