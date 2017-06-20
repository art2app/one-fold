import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import sampleBudget from '../sample/sampleBudget';

import { BudgetDetailPage } from '../budget-detail/budget-detail';
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

  BudgetIncome :{name:string, nominal:number, persen:number, status:string}[];
  BudgetExpenses :{name:string, nominal:number, persen:number, status:string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.BudgetIncome = [
      {name: "Gaji", nominal:10000000, persen:70, status:"month"}
    ];
    this.BudgetExpenses = sampleBudget;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetPage');

  }

  clickDetail(item:any) {
    console.log("open budget detail");
    console.log("item:", item);
    // this.pushPage = BudgetDetailPage;
    this.navCtrl.push(BudgetDetailPage, {data:item});
  }

}
