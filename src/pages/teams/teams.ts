import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';


@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {



  public teams = {};
  public tourney: any;

  constructor(
    public navCtrl: NavController, 
    private eliteApi: EliteApi,
    public navParams: NavParams) {
      this.teams = this.navParams.data;
  }

  ionViewDidLoad(){
    let selectedTourne= this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourne.id).subscribe(data => {
      this.teams = data.teams;
    })
  }
  itemTapped2($event, team){
    this.navCtrl.push(TeamHomePage, team);
  }

}
