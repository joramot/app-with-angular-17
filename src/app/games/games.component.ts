import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {       
      <li (click)="favGame(game.name)">{{ game.name }} ></li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username: string = 'BeautifulBoys';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  favGame(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
      {
        id: 1,
        name: 'Super Mario Bros.',
      },
      {
        id: 2,
        name: 'Zelda',
      },
      {
        id: 3,
        name: 'Donkey Kong',
      },
      {
        id: 4,
        name: ' Contra'}
    ]
}
