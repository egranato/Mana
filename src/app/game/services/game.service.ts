import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  // public players: Array<Player>;
  constructor() {
    // this.players = [];
  }
  public roll(): number {
    return this.getRoll();
  }
  private getRoll(): number {
    const possibilities = [1, 2, 3, 4, 5, 6];
    const rounds = Math.floor((((Math.random() * (Math.random() * 3000)) / Math.random())) / Math.random());
    const result = rounds % possibilities.length;
    return possibilities[result];
  }
}
