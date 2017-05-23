import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BudgetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

  Budget :{name:string, nominal:number}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetPage');
    this.Budget = [
      {name: "Daily Budget", nominal:10000},
      {name: "Weekly Budget", nominal:10000},
      {name: "Monthly Budget", nominal:10000},
      {name: "Yearly Budget", nominal:10000}
    ];
  }

}
