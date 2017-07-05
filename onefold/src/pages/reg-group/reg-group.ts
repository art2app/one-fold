import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegGroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reg-group',
  templateUrl: 'reg-group.html',
})
export class RegGroupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegGroupPage');
  }

  join() {
    this.navCtrl.popToRoot();
  }
  create() {
    this.navCtrl.popToRoot();
  }
}
