import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MediaLeftComponent } from './media-left/media-left.component';
import { Routes, RouterModule } from '@angular/router';
import { ThreeCardRandomTravailComponent } from './three-card-random-travail/three-card-random-travail.component';
import { ThreeCardRandomFinanceComponent } from './three-card-random-finance/three-card-random-finance.component';
import { ThreeCardRandomAmourComponent } from './three-card-random-amour/three-card-random-amour.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OneCardRandomTravailComponent } from './one-card-random-travail/one-card-random-travail.component';
import { OneCardRandomFinanceComponent } from './one-card-random-finance/one-card-random-finance.component';
import { OneCardRandomLoveComponent } from './one-card-random-love/one-card-random-love.component';
import { TwoCardRandomTravailComponent } from './two-card-random-travail/two-card-random-travail.component';
import { TwoCardRandomFinanceComponent } from './two-card-random-finance/two-card-random-finance.component';
import { TwoCardRandomAmourComponent } from './two-card-random-amour/two-card-random-amour.component';
import { DeckComponent } from './deck/deck.component';

const appRoutes: Routes = [
  { path: 'oneCardLove', component: OneCardRandomLoveComponent },
  { path: 'oneCardFinance', component: OneCardRandomFinanceComponent },
  { path: 'oneCardWork', component: OneCardRandomTravailComponent },
  { path: 'twoCardLove', component: TwoCardRandomAmourComponent },
  { path: 'twoCardFinance', component: TwoCardRandomFinanceComponent },
  { path: 'twoCardWork', component: TwoCardRandomTravailComponent },
  { path: 'threeCardLove', component: ThreeCardRandomAmourComponent },
  { path: 'threeCardFinance', component: ThreeCardRandomFinanceComponent },
  { path: 'threeCardWork', component: ThreeCardRandomTravailComponent },
  { path: 'deck', component: DeckComponent },
  { path: 'accueil', component: MainPageComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MediaLeftComponent,
    ThreeCardRandomTravailComponent,
    ThreeCardRandomFinanceComponent,
    ThreeCardRandomAmourComponent,
    MainPageComponent,
    OneCardRandomTravailComponent,
    OneCardRandomFinanceComponent,
    OneCardRandomLoveComponent,
    TwoCardRandomTravailComponent,
    TwoCardRandomFinanceComponent,
    TwoCardRandomAmourComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
