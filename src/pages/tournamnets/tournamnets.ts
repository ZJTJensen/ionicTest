import { TeamsPage } from './../teams/teams';
import { myTeamsPage } from './../myTeams/myTeams';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamnetsPage');
  }

  itemTapped(){
    this.navCtrl.push(TeamsPage);
  }

}
