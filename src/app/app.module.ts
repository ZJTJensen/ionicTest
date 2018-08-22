import { TeamHomePage } from './../pages/team-home/team-home';
import { StandingsPage } from './../pages/standings/standings';
import { TeamDetailPage } from './../pages/team-detail/team-detail';
import { TeamsPage } from './../pages/teams/teams';
import { GamePage } from './../pages/game/game';
import { myTeamsPage } from './../pages/myTeams/myTeams';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TournamnetsPage } from '../pages/tournamnets/tournamnets';

@NgModule({
  declarations: [
    MyApp,
    myTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamnetsPage,
    StandingsPage,
    TeamHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    myTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamnetsPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
