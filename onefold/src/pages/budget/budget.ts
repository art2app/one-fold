import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {NavController, NavParams } from 'ionic-angular';

// import sampleBudget from '../sample/sampleBudget';

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
  itemObj: FirebaseListObservable<any>;
  items: FirebaseListObservable<any>;
  date = new Date();
  val:object;
  // BudgetIncome :{name:string, nominal:number, persen:number, status:string}[];
  // BudgetExpenses :{name:string, nominal:number, persen:number, status:string}[];
  // Budget :{name:string, nominal:number, persen:number, status:string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    // this.Budget = [
    //   {name: "Gaji", nominal:10000000, persen:70, status:"month"}
    // ];
    // this.BudgetExpenses = sampleBudget;
    // this.items = db.list('categorize/arthurapple');
    // this.itemObj = db.object('categorize/arthurapple', { preserveSnapshot: true });
    // this.itemObj.subscribe(snapshot => {
    //   console.log("key :", snapshot.key)
    //   console.log("val :", snapshot.val());
    //   this.items = snapshot.val();
    // });

    this.items = db.list("budget/arthurapple/" + this.date.getFullYear() + "/" + (this.date.getMonth() + 1));
    this.items.subscribe(snapshotsItem => {
      console.log("snapshots items", snapshotsItem);
      // snapshotsItem it is items
      this.itemObj = db.list("categorize/arthurapple");
      this.itemObj.subscribe(snapshotsCat => {
        // snapshotsCat it is categorize
        console.log("snapshots categorize ", snapshotsCat);
        if (snapshotsItem.length === 0) {
          snapshotsCat.forEach(val => {
            val = {
              name: val.name,
              nominal: val.nominal,
              persen: 0,
              start: val.start,
              status: val.status
            };
            this.items.push(val);
          });
        }
      });
    })
    // console.log("this.items : ", this.items);
    // this.itemObj = db.object("budget/arthurapple/" + this.date.getFullYear() + "/" + this.date.getMonth() + 1);
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
