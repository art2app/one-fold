import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BudgetAddFormPage } from './budget-add-form';

@NgModule({
  declarations: [
    BudgetAddFormPage,
  ],
  imports: [
    IonicPageModule.forChild(BudgetAddFormPage),
  ],
  exports: [
    BudgetAddFormPage
  ]
})
export class BudgetAddFormPageModule {}
