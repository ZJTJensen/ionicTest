import { TeamsPage } from './../teams/teams';
import { myTeamsPage } from './../myTeams/myTeams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';

/**
 * Generated class for the TournamnetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournamnets',
  templateUrl: 'tournamnets.html',
})
export class TournamnetsPage {


  public tournaments: any;

  constructor(
    public navCtrl: NavController, 
    private eliteApi: EliteApi,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.eliteApi.getTournamnets().then(data => this.tournaments = data);
  }


  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

}
