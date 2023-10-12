import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${limit}`);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }
}
