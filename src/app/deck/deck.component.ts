import { Component, OnInit } from '@angular/core';
import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor() { }

  cards = CARDS;

  ngOnInit() {
  }

  /*card = [
    {
      "nom": "Abondance",
      "description": "desctiption de la carte Abondance",
      "photo": "../../assets/img-card/abondance.jpg",
    },
    {
      "nom": "Aventure",
      "description": "desctiption de la carte Aventure",
      "photo": "../../assets/img-card/aventure.jpg",
    },
    {
      "nom": "Cadeau",
      "description": "desctiption de la carte Cadeau",
      "photo": "../../assets/img-card/cadeau.jpg",
    },
    {
      "nom": "Contemporain",
      "description": "desctiption de la carte Contemporain",
      "photo": "../../assets/img-card/contemporain.jpg",
    },
    {
      "nom": "Etriqué",
      "description": "desctiption de la carte Etriqué",
      "photo": "../../assets/img-card/etriqué.jpg",
    },
    {
      "nom": "Gouffre",
      "description": "desctiption de la carte Gouffre",
      "photo": "../../assets/img-card/goufre.jpg",
    },
    {
      "nom": "Histoire",
      "description": "desctiption de la carte Histoire",
      "photo": "../../assets/img-card/histoire.jpg",
    },
    {
      "nom": "Invisible",
      "description": "desctiption de la carte invisible",
      "photo": "../../assets/img-card/invisible.jpg",
    },
    {
      "nom": "Multi-facette",
      "description": "desctiption de la carte Multi-facette",
      "photo": "../../assets/img-card/multi-facette.jpg",
    },
    {
      "nom": "Noblesse",
      "description": "desctiption de la carte Noblesse",
      "photo": "../../assets/img-card/noblesse.jpg",
    },
    {
      "nom": "Notoriété",
      "description": "desctiption de la carte Notoriété",
      "photo": "../../assets/img-card/notoriete.jpg",
    },
    {
      "nom": "Ouverture",
      "description": "desctiption de la carte Ouverture",
      "photo": "../../assets/img-card/ouverture.jpg",
    },
    {
      "nom": "Paranoia",
      "description": "desctiption de la carte Paranoia",
      "photo": "../../assets/img-card/paranoia.jpg",
    },
    {
      "nom": "Piece",
      "description": "desctiption de la carte Piece",
      "photo": "../../assets/img-card/piece.jpg",
    },
    {
      "nom": "Reine",
      "description": "desctiption de la carte Reine",
      "photo": "../../assets/img-card/reine.jpg",
    },
    {
      "nom": "Repos",
      "description": "desctiption de la carte Repos",
      "photo": "../../assets/img-card/repos.jpg",
    },
    {
      "nom": "Sagesse",
      "description": "desctiption de la carte Sagesse",
      "photo": "../../assets/img-card/sagesse.jpg",
    },
    {
      "nom": "Solitaire",
      "description": "desctiption de la carte Solitaire",
      "photo": "../../assets/img-card/solitaire.jpg",
    },
    {
      "nom": "Vague",
      "description": "desctiption de la carte Vague",
      "photo": "../../assets/img-card/vague.jpg",
    } 
  ]*/

}
