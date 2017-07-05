import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent {
  private currentUser: firebase.User;
  text: string;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
    console.log('Hello LogoutComponent Component');
    // this.text = 'Hello World';
    // afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
    afAuth.auth.signOut().then(() => {
      console.log("navCtrl :");
      this.navCtrl.push(LoginPage);
    });
  }

}
