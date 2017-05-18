import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecordPage } from '../record/record';

import { Balance } from '../interface/balanceInterface';
import { Instrument } from '../interface/instrumentInterface';
import instrument from '../data/instrumentdata';
import balance from '../data/balancedata';
/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  recordPage = RecordPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  instrumentCollection : Instrument[];

  balanceCollection : Balance[];

  balance = 0;

  ngOnInit () {
    this.instrumentCollection = instrument;
    this.balanceCollection = balance;
  }

  calculateInstrument (key : string) {
    return 0;
  }

}
