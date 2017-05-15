import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AccountPage } from '../pages/account/account';
import { BudgetPage } from '../pages/budget/budget';
import { CategoryPage } from '../pages/category/category';
import { ReportPage } from '../pages/report/report';
import { RestorePage } from '../pages/restore/restore';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    BudgetPage,
    CategoryPage,
    ReportPage,
    RestorePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    BudgetPage,
    CategoryPage,
    ReportPage,
    RestorePage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
