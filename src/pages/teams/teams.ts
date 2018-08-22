import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';


@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams = [
    {id: 1, name :'Live'},
    {id: 2, name :'Red'},
    {id: 3, name :'GARY MOTHERFING OAK'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped2($event, team){
    this.navCtrl.push(TeamHomePage, team);
  }

}
