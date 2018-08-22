import { TournamnetsPage } from './../tournamnets/tournamnets';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-myTeams',
  templateUrl: 'myTeams.html'
})
export class myTeamsPage {

  constructor(public nav: NavController) { }
  
  goToTournaments(){
    this.nav.push(TournamnetsPage);
  }

}
