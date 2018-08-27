import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class EliteApi {
  private baseUrl= "https://eliete-scheduel-app-i2.firebaseio.com";

  private currentTourney: any = {};
  constructor(public http: Http) {

  }

  getTournamnets(){
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournamnets.json`).subscribe(res =>{resolve(res.json())})
    })
  }


  getTournamentData(tourneyId): Observable<any>{

    return this.http.get(`${this.baseUrl}/tournamnets-data/${tourneyId}.json`)
    .map(response => {
      this.currentTourney = response.json();
      return this.currentTourney;
    })

  }

}
