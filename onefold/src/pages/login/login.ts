import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { SignupPage } from "../signup/signup";
// import { HttpInterceptorService } from 'ng-http-interceptor';
import { Http } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private currentUser: firebase.User;
  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    private http: Http
  ) {
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }

  login(desc:string): firebase.Promise<any> {
    console.log("desc : ", desc);
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.navCtrl.popToRoot();
    });
  }

  loginWithoutAuth() {
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // login(desc:string) {
  //   console.log("desc ", desc);
  //   // this.navCtrl.popToRoot();
  // }

  signup(desc:string) {
    console.log("desc : ", desc);
    console.log("this.currentUser ", this.currentUser);
    // return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //   .then(() => {
    //     this.http.get("http://localhost:8010/leadsales-dev/us-central1/registeredAccount")
    //       .toPromise()
    //       .then(response => response.json().data)
    //       .catch(this.handleError);
        this.navCtrl.popToRoot();
    //   });
    // var headers = new Headers();
    // headers.append('Authorization', 'Bearer ');
    // this.http.get("http://localhost:8010/leadsales-dev/us-central1/registeredAccount")
    //   .subscribe(data => {
    //     console.log("data: ", data);
    //   });
    // var headers:any = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'Bearer Halooo');
    //
    // // var payload:any = { key:"HCT" };
    // this.http.get(
    //   "http://localhost:8010/leadsales-dev/us-central1/registeredAccount",
    //   {headers: headers})
    //   .subscribe(data => {
    //         console.log("data: ", data);
    //       });
  }

}
