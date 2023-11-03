import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/layout/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'saiu', component: IndexComponent },
  { path: 'listagem', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
