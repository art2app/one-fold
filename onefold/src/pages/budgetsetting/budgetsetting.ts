import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BudgetsettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-budgetsetting',
  templateUrl: 'budgetsetting.html',
})
export class BudgetsettingPage {
  Budget :{name:string, nominal:number}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetsettingPage');
    this.Budget = [
      {name: "Daily Budget", nominal:10000},
      {name: "Weekly Budget", nominal:10000},
      {name: "Monthly Budget", nominal:10000},
      {name: "Yearly Budget", nominal:10000}
    ];
  }

}
