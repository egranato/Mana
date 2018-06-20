import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class GameService {
  // public players: Array<Player>;
  private socket: any;
  constructor() {
    // this.players = [];
    this.socket = io('https://diceliar.herokuapp.com/');
  }
  public roll(): number {
    return this.getRoll();
  }
  public getRandom(min: number, max: number): number {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  private getRoll(): number {
   const rolls = [1, 2, 3, 4, 5, 6];
   const playerBonusses = [4, 5, 6];
   rolls.concat(playerBonusses);
   const index = this.getRandom(0, rolls.length - 1);
   return rolls[index];
  }
}
