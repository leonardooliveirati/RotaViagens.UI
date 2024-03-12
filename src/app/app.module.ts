// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RotaFormComponent } from './melhor-rota/melhor-rota.component';

@NgModule({
  declarations: [
    RotaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RotaFormComponent]
})
export class AppModule { }
