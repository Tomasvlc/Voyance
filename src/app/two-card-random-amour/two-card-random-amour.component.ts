import { Component, OnInit } from '@angular/core';
import { CARDS_lOVE } from '../mock-cards-love';

@Component({
  selector: 'app-two-card-random-amour',
  templateUrl: './two-card-random-amour.component.html',
  styleUrls: ['./two-card-random-amour.component.css']
})
export class TwoCardRandomAmourComponent implements OnInit {


  constructor() { }

  alwaysShow: boolean;
  firstCard: {};
  secondCard: {};

  ngOnInit() {
  }

  cards = CARDS_lOVE;

  // function qui permet de mélanger un json
  randomize(card) {
    var i, j, tmp;
    for (i = card.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = card[i];
      card[i] = card[j];
      card[j] = tmp;
    }
    return card;
  }

  // function qui va mélanger le json souhaité
  randomizeMyDeck() {
    this.cards = this.randomize(this.cards);
  }

  // tire deux cartes
  getTwoCard() {
    this.randomizeMyDeck();
    this.firstCard = this.cards[0];
    this.secondCard = this.cards[1];
  }
}
