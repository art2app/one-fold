import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Instrument } from '../interface/instrumentInterface';

import { TabIncome } from './tab-income';
import { TabExpense } from './tab-expense';
import { TabTransfer } from './tab-transfer';

/**
 * Generated class for the RecordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

  instrument : Instrument;
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit () {
    console.log('ionViewDidLoad RecordPage');
    this.instrument = this.navParams.data;
    this.tab1 = TabIncome;
    this.tab2 = TabExpense;
    this.tab3 = TabTransfer;
  }

}
