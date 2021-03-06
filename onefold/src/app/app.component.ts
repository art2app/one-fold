import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from "angularfire2/auth"

import { BudgetPage } from '../pages/budget/budget';
import { ReportPage } from '../pages/report/report';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public afAuth: AngularFireAuth
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Bugdet', component: BudgetPage },
      { title: 'Report', component: ReportPage },
      { title: 'Settings', component: SettingsPage },
    ];

    // this.navCtrl.push(LoginPage);
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      // this.navCtrl.popToRoot();
      this.nav.push(LoginPage);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
