// Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// App Dependencies

// Componenets
import { AppComponent } from './app.component';
import { PlayComponent } from './components/play/play.component';
import { GameComponent } from './components/play/game/game.component';
import { GameboardComponent } from './components/play/game/gameboard/gameboard.component';
import { GameDisplayComponent } from './components/play/game/game-display/game-display.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { SigninComponent } from './components/home/signin/signin.component';
// Services
import { GameService } from './services/game.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    GameComponent,
    GameboardComponent,
    GameDisplayComponent,
    HomeComponent,
    DashboardComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GameService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
