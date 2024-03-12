import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Rota } from './models/rota';

@Injectable({
  providedIn: 'root'
})
export class RotaService {
  private rotasUrl = 'https://localhost:7055/api/rotas'; // Atualize com a URL da sua API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getRotas(): Observable<Rota[]> {
    return this.http.get<Rota[]>(this.rotasUrl)
      .pipe(
        catchError(this.handleError<Rota[]>('getRotas', []))
      );
  }

  getRota(id: number): Observable<Rota> {
    const url = `${this.rotasUrl}/${id}`;
    return this.http.get<Rota>(url)
      .pipe(
        catchError(this.handleError<Rota>('getRota'))
      );
  }

  adicionarRota(rota: Rota): Observable<Rota> {
    return this.http.post<Rota>(this.rotasUrl, rota, this.httpOptions)
      .pipe(
        catchError(this.handleError<Rota>('adicionarRota'))
      );
  }

  atualizarRota(rota: Rota): Observable<any> {
    return this.http.put(`${this.rotasUrl}/${rota.id}`, rota, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('atualizarRota'))
      );
  }

  obterMelhorRota(origem: string, destino: string): Observable<Rota[]> {
    const url = `${this.rotasUrl}/melhor-rota?origem=${origem}&destino=${destino}`;
    return this.http.get<Rota[]>(url);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  };
}

