import { myTeamsPage } from './../myTeams/myTeams';
import { StandingsPage } from './../standings/standings';
import { TeamDetailPage } from './../team-detail/team-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {

  public team: any = {};

  public teamDetailTab = TeamDetailPage;
  public standingsTab = StandingsPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }
  home(){
    this.navCtrl.popToRoot();
    // this.navCtrl.push(myTeamsPage);
  }

}
