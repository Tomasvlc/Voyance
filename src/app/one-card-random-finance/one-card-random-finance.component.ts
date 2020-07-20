import { Component, OnInit } from '@angular/core';
import { CARDS_FINANCE } from '../mock-cards-finance';

@Component({
  selector: 'app-one-card-random-finance',
  templateUrl: './one-card-random-finance.component.html',
  styleUrls: ['./one-card-random-finance.component.css']
})
export class OneCardRandomFinanceComponent implements OnInit {

  constructor() {
  }

  cards = CARDS_FINANCE;

  alwaysShow: boolean;
  firstCard: {};
  secondCard: {};
  thirdCard: {};

  ngOnInit() {
  }

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

  // tire une carte
  getOneCard() {
      this.randomizeMyDeck();
      this.firstCard = this.cards[0];
  }

}
