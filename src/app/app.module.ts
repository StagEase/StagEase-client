import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/layout/index/index.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaComponent } from './components/controle/area/area.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { SupervisorComponent } from './components/controle/supervisor/supervisor.component';
import { InstituicaoComponent } from './components/controle/instituicao/instituicao.component';
import { EquipamentoComponent } from './components/controle/equipamento/equipamento.component';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SidebarComponent,
    AreaComponent,
    SelectComponent,
    SupervisorComponent,
    InstituicaoComponent,
    EquipamentoComponent,
    HomeComponent,
    FilterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
