import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetDetailPage } from './budget-detail';

@NgModule({
  declarations: [
    BudgetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetDetailPage),
  ],
  exports: [
    BudgetDetailPage
  ]
})
export class BudgetDetailPageModule {}
