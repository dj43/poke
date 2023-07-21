import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TabViewComponent } from './tab-view/tab-view.component';
import { DetailsComponent } from './tab-view/details/details.component';
import { EvolutionComponent } from './tab-view/evolution/evolution.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    TabViewComponent,
    DetailsComponent,
    EvolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
