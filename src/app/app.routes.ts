import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarRotasComponent } from './listar-rotas/listar-rotas.component';
import { AdicionarRotaComponent } from './adicionar-rota/adicionar-rota.component';
import { AtualizarRotaComponent } from './atualizar-rota/atualizar-rota.component';

const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: 'listar', component: ListarRotasComponent },
  { path: 'adicionar', component: AdicionarRotaComponent },
  { path: 'atualizar/:id', component: AtualizarRotaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
