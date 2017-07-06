import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private currentUser: firebase.User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {

    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
      console.log("this.currentUser: ", this.currentUser);
      if (this.currentUser === null) {
        this.navCtrl.push(LoginPage);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
