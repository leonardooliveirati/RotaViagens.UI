// rota-form.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rota-form',
  templateUrl: './melhor-rota.component.html',
  styleUrls: ['./melhor-rota.component.css']
})
export class RotaFormComponent {

  origem: string = "";
  destino: string = "";
  melhorRota: string = "";

  constructor(private http: HttpClient) { }

  buscarMelhorRota(): void {
    const url = `http://localhost:porta/api/rotas/melhor-rota?origem=${this.origem}&destino=${this.destino}`;

    this.http.get<string>(url).subscribe(
      (rota) => {
        this.melhorRota = rota;
      },
      (error) => {
        console.error('Erro ao buscar a melhor rota:', error);
      }
    );
  }
}
