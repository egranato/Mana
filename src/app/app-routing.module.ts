// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { PlayComponent } from './components/play/play.component';
import { GameComponent } from './components/play/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { SigninComponent } from './components/home/signin/signin.component';

// Routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'play', component: PlayComponent,
    children: [
      // load
      // loby
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
