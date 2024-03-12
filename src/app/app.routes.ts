import { Routes } from '@angular/router';
import { ListarRotasComponent } from './listar-rotas/listar-rotas.component';
import { AdicionarRotaComponent } from './adicionar-rota/adicionar-rota.component';
import { AtualizarRotaComponent } from './atualizar-rota/atualizar-rota.component';

export const routes: Routes = [
  { path: 'listar', component: ListarRotasComponent },
  { path: 'adicionar', component: AdicionarRotaComponent },
  { path: 'atualizar/:id', component: AtualizarRotaComponent },
];
