import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayComponent } from './components/play/play.component';
import { GameComponent } from './components/game/game.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { GameDisplayComponent } from './components/game-display/game-display.component';
import { GameService } from './game/services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    GameComponent,
    GameboardComponent,
    GameDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
