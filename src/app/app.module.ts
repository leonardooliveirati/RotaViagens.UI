// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RotaFormComponent } from './melhor-rota/melhor-rota.component';
import { ListarRotasComponent } from './listar-rotas/listar-rotas.component';
import { AdicionarRotaComponent } from './adicionar-rota/adicionar-rota.component';
import { AtualizarRotaComponent } from './atualizar-rota/atualizar-rota.component';


@NgModule({
  declarations: [
    RotaFormComponent,
    ListarRotasComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RotaFormComponent]
})
export class AppModule { }
