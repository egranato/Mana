import { Component, OnInit } from '@angular/core';
import { GameService } from '../../game/services/game.service';
import { BoardSpace } from '../../game/models/board-space';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {
  protected spaces: Array<BoardSpace>;
  protected currentTurn: number;
  constructor(private gameService: GameService) { }
  ngOnInit() {
    const tmpSpace = new BoardSpace('Start', null, () => {
      // const player = this.getCurrentTurn();
      // this.gameService.players[player].assets += 100000;
    },
      () => {
        // const player = this.getCurrentTurn();
        // this.gameService.players[player].assets += 1000;
      }
    );
    this.spaces = [];
    while (this.spaces.length < 45) {
      this.spaces.push(tmpSpace);
    }
  }
}
