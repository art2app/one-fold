import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';

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
  public obj: object;

  public desc:string;
  public nom:string;

  // item: FirebaseObjectObservable<any>;
  item : FirebaseListObservable<any>;
  date: any;
  private currentUser: firebase.User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase
  ) {
    this.data = navParams.get("data");
    console.log("this.data :", this.data);
    this.name = this.data.name;
    this.nominal = this.data.nominal;
    this.persen = this.data.persen;
    this.open = false;

    this.date = new Date();

    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
      console.log("this.currentUser ",this.currentUser);
    });

    this.item = db.list('budget/arthurapple/' +
      this.date.getFullYear() +
      '/' + (this.date.getMonth() + 1) +
      "/" + this.date.getDate());
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

  save() {
    // this.obj.categorize = this.data;
    // this.obj.nominal = this.nominal;
    // this.obj.created = "jksahdkjahsd";
    // this.obj.description = this.desc;

    this.obj = {
      created : {
        email :this.currentUser.email,
        uid : this.currentUser.uid
      },
      categorize : this.data,
      nominal : this.nominal,
      description : this.desc,
      key : this.data.$key
    };

    this.item.push(this.obj);
    this.navCtrl.pop();
  }
}
