import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { BudgetPage } from '../pages/budget/budget';
import { BudgetDetailPage } from '../pages/budget-detail/budget-detail';
import { BudgetAddFormPage } from '../pages/budget-add-form/budget-add-form'
import { CategoryPage } from '../pages/category/category';
import { ReportPage } from '../pages/report/report';
import { RestorePage } from '../pages/restore/restore';
import { SettingsPage } from '../pages/settings/settings';
import { RecordPage } from '../pages/record/record';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { RegGroupPage } from '../pages/reg-group/reg-group'

import { TabIncome } from '../pages/record/tab-income';
import { TabExpense } from '../pages/record/tab-expense';
import { TabTransfer } from '../pages/record/tab-transfer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProgressbarComponent } from '../components/progressbar/progressbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountPage,
    AccountPage,
    BudgetPage,
    CategoryPage,
    ReportPage,
    RestorePage,
    SettingsPage,
    RecordPage,
    TabIncome,
    TabExpense,
    TabTransfer,
    ProgressbarComponent,
    BudgetDetailPage,
    BudgetAddFormPage,
    LoginPage,
    SignupPage,
    RegGroupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountPage,
    BudgetPage,
    CategoryPage,
    ReportPage,
    RestorePage,
    SettingsPage,
    RecordPage,
    TabIncome,
    TabExpense,
    TabTransfer,
    BudgetDetailPage,
    BudgetAddFormPage,
    LoginPage,
    SignupPage,
    RegGroupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
