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

  BudgetIncome :{name:string, nominal:number, persen:number, status:string}[];
  BudgetExpenses :{name:string, nominal:number, persen:number, status:string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.BudgetIncome = [
      {name: "Gaji", nominal:10000000, persen:70, status:"month"}
    ];
    this.BudgetExpenses = [
      {name: "Kosan", nominal:1000000, persen:10, status:"month"},
      {name: "Makan", nominal:1000000, persen:10, status:"month"},
      {name: "Kartu kredit", nominal:1000000, persen:50, status:"month"},
      {name: "Bank STD Chart", nominal:2000000, persen:100, status:"month"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetPage');

  }

}
