import { Component, OnInit } from '@angular/core';
import { RotaService } from '../rota.service';
import { Rota } from '../models/rota';

@Component({
  selector: 'app-listar-rotas',
  templateUrl: './listar-rotas.component.html',
  styleUrls: ['./listar-rotas.component.css']
})
export class ListarRotasComponent implements OnInit {
  rotas: Rota[] = [];

  constructor(private rotaService: RotaService) { }

  ngOnInit(): void {
    this.getRotas();
  }

  getRotas(): void {
    this.rotaService.getRotas()
      .subscribe(rotas => this.rotas = rotas);
  }
}
