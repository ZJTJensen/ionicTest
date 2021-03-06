import { myTeamsPage } from './../myTeams/myTeams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  public team: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }
  goHome() {
    this.navCtrl.parent.parent.popToRoot();
    // this.navCtrl.popToRoot();
    // this.navCtrl.push(myTeamsPage);
  }

}
