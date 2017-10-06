import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/david.png',
          name: 'David Orozco'
        },
        date: 'Martes, 21 Octubre 2017',
        image: 'assets/img/notice.png',
        content: 'A partir del 1 de enero del 2017 se solicitara pasar por sus placas nuevas.',
      },
      {
        user: {
          avatar: 'assets/img/urzua.png',
          name: 'Leonardo Urzua'
        },
        date: 'Lunes, 20 de Octubre 2017',
        image: 'assets/img/urgente.png',
        content: 'Proxima asamblea para elegir al presidente del sidicato el dia 13 de octubre del 2017'
      }
    ];

  }
}
