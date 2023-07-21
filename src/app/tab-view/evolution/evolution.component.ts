import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/pokeapi.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.scss'],
})
export class EvolutionComponent {
  constructor(
    private pokeapiService: PokeapiService,
    private route: ActivatedRoute
  ) {}
  id!: string | null;
  pokemonList: any[] = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id &&
      this.pokeapiService.getSpecies(+this.id).subscribe((species) => {
        this.pokeapiService
          .getEvolutionChain(species.evolution_chain.url)
          .subscribe((evolution) => {
            evolution = evolution.chain;
            let index = 0;
            while (evolution) {
              this.pokemonList[index] = {};
              this.pokemonList[index].name = evolution.species.name;
              let id = evolution.species.url.split('/').at(-2);
              this.getDetails(id, index);
              evolution = evolution.evolves_to[0];
              index++;
            }
          });
      });
  }

  getDetails(id: any, index: number) {
    this.pokeapiService.getPokemonDetails(id).subscribe((result) => {
      this.pokemonList[index]['image'] =
        result.sprites.other.dream_world.front_default;
      this.pokemonList[index]['id'] = result.id;
    });
  }
}
