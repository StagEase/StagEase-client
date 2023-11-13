import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';
import { AreaComponent } from './components/controle/area/area.component';
import { SupervisorComponent } from './components/controle/supervisor/supervisor.component';
import { InstituicaoComponent } from './components/controle/instituicao/instituicao.component';
import { EquipamentoComponent } from './components/controle/equipamento/equipamento.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: IndexComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'area', component: AreaComponent },
      { path: 'supervisor', component: SupervisorComponent },
      { path: 'equipamento', component: EquipamentoComponent },
      { path: 'instituicao', component: InstituicaoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
