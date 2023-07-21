import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { DetailsComponent } from './tab-view/details/details.component';
import { EvolutionComponent } from './tab-view/evolution/evolution.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    pathMatch: 'full',
  },
  {
    path: 'pokemon/:id',
    component: TabViewComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'evolutions',
        component: EvolutionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
