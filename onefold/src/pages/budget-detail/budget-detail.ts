import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BudgetDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-budget-detail',
  templateUrl: 'budget-detail.html',
})
export class BudgetDetailPage {
  public data:any;
  public name:string;
  public nominal:number;
  public persen:number;

  public open:boolean;
  public from:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get("data");
    this.name = this.data.name;
    this.nominal = this.data.nominal;
    this.persen = this.data.persen;

    this.open = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BudgetDetailPage');

  }

  OpenTrans(event) {
    console.log("open ",this.open);
    this.open = !this.open;
  }

  changeThis(item) {
    console.log("change ", item);
  }
}
