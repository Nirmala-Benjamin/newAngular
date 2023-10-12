import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const limit = 10; // You can adjust the limit as needed
    this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .subscribe((response: any) => {
        const pokemonList = response.results;
        pokemonList.forEach((pokemon: any) => {
          this.http.get(pokemon.url)
            .subscribe((pokemonData: any) => {
              this.pokemons.push({
                name: pokemonData.name,
                image: pokemonData.sprites.front_default
              });
            });
        });
      });
  }
}
