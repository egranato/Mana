// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { PlayComponent } from './components/play/play.component';
import { GameComponent } from './components/game/game.component';
// Routes
const routes: Routes = [
  { path: 'play', component: PlayComponent,
    children: [
      { path: '', redirectTo: 'game', pathMatch: 'full' },
      { path: 'game', component: GameComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
