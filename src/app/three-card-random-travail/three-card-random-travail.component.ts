import { Component, OnInit } from '@angular/core';
import { CARDS_WORK } from '../mock-cards-work';

@Component({
  selector: 'app-three-card-random-travail',
  templateUrl: './three-card-random-travail.component.html',
  styleUrls: ['./three-card-random-travail.component.css']
})
export class ThreeCardRandomTravailComponent implements OnInit {

  constructor() { }


  alwaysShow: boolean;
  firstCard: {};
  secondCard: {};
  thirdCard: {};

  ngOnInit() {
  }

  cards = CARDS_WORK;

  // un deck de carte
  // on mélange les cartes
  // on tire une carte du deck mélangé
  // ensuite on tire une nouvelle carte

  // création un tableau de carte
  // Nous utilisons le json : card
  // chercher une fonction qui permet de mélanger le tableau

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

  // Tire trois cartes
  getThreeCard() {
      this.randomizeMyDeck();
      this.firstCard = this.cards[0];
      this.secondCard = this.cards[1];
      this.thirdCard = this.cards[2];
  }

}
