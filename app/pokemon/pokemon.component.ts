import { Component, OnInit, Input } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    const limit = 20; // Specify the number of Pokémon to retrieve
    this.pokemonApiService.getPokemonList(limit).subscribe((data: any) => {
      data.results.forEach((result: any) => {
        this.pokemonApiService.getPokemonDetails(result.url).subscribe((pokemonData: any) => {
          this.pokemonList.push({
            name: pokemonData.name,
            image: pokemonData.sprites.front_default
          });
        });
      });
    });
  }
  @Input() title: string = '';
  isActive: boolean = false;

  toggleAccordion() {
    this.isActive = !this.isActive;
  }
}

