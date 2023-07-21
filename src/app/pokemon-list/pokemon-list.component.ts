import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  pokemonList: any[] = [];
  limit = 6;
  offset = 0;

  constructor(private pokeapiService: PokeapiService, private router: Router) {}

  ngOnInit() {
    this.getPokemon(this.offset);
  }

  getPokemon(offset: number) {
    this.pokeapiService
      .getPokemonList(this.limit, offset)
      .subscribe((result) => {
        this.pokemonList = [...this.pokemonList, ...result.results];
        result.results.forEach((pokemon: any, index: number) => {
          let id = pokemon.url.split('/').at(-2);
          this.getDetails(id, index, this.pokemonList.length);
        });
      });
    this.offset = offset;
  }

  getDetails(id: number, index: number, offset: number) {
    console.log(offset, this.pokemonList);
    this.pokeapiService.getPokemonDetails(id).subscribe((result) => {
      this.pokemonList[index + offset - this.limit].image =
        result.sprites.other.dream_world.front_default;
    });
  }

  redirect(pokemon: any) {
    let id = pokemon.url.split('/').at(-2);
    this.router.navigate(['/pokemon', id, 'details']);
  }

  onScroll() {
    let offset = this.offset + this.limit;
    this.getPokemon(offset);
  }
}
