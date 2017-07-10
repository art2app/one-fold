import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {NavController, NavParams } from 'ionic-angular';

import sampleBudget from '../sample/sampleBudget';

import { BudgetDetailPage } from '../budget-detail/budget-detail';
import { BudgetAddFormPage } from '../budget-add-form/budget-add-form';
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
  // items:any;
  // itemObj: FirebaseObjectObservable<any>;
  items: FirebaseListObservable<any>;

  // BudgetIncome :{name:string, nominal:number, persen:number, status:string}[];
  // BudgetExpenses :{name:string, nominal:number, persen:number, status:string}[];
  Budget :{name:string, nominal:number, persen:number, status:string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    // this.Budget = [
    //   {name: "Gaji", nominal:10000000, persen:70, status:"month"}
    // ];
    // this.BudgetExpenses = sampleBudget;
    this.items = db.list('categorize/arthurapple');
    // this.itemObj = db.object('categorize/arthurapple', { preserveSnapshot: true });
    // this.itemObj.subscribe(snapshot => {
    //   console.log("key :", snapshot.key)
    //   console.log("val :", snapshot.val());
    //   this.items = snapshot.val();
    // });
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

  clickTambah() {
    this.navCtrl.push(BudgetAddFormPage);
  }

}
