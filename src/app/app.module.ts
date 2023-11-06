import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/layout/index/index.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaComponent } from './components/controle/area/area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupervisorComponent } from './components/controle/supervisor/supervisor.component';
import { InstituicaoComponent } from './components/controle/instituicao/instituicao.component';
import { EquipamentoComponent } from './components/controle/equipamento/equipamento.component';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AxiosService } from './services/axiosConfig/axios.service';
import { AreaModalComponent } from './components/controle/area/area-modal/area-modal.component';
import { InstituicaoModalComponent } from './components/controle/instituicao/instituicao-modal/instituicao-modal.component';
import { SupervisorModalComponent } from './components/controle/supervisor/supervisor-modal/supervisor-modal.component';
import { EquipamentoModalComponent } from './components/controle/equipamento/equipamento-modal/equipamento-modal.component';
import { HomeModalComponent } from './components/home/home-modal/home-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    AreaComponent,
    SupervisorComponent,
    InstituicaoComponent,
    EquipamentoComponent,
    HomeComponent,
    FilterComponent,
    HeaderComponent,
    AreaModalComponent,
    InstituicaoModalComponent,
    SupervisorModalComponent,
    EquipamentoModalComponent,
    HomeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AxiosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
