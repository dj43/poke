import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  image!: string;
  name!: string;
  result!: any;
  constructor(
    private pokeapiService: PokeapiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.getDetails(id);
  }

  getDetails(id: any) {
    this.pokeapiService.getPokemonDetails(id).subscribe((result) => {
      this.result = result;
      this.image = result.sprites.other.dream_world.front_default;
      this.name = result.species.name;
    });
  }
}
