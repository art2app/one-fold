import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegGroupPage } from './reg-group';

@NgModule({
  declarations: [
    RegGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(RegGroupPage),
  ],
  exports: [
    RegGroupPage
  ]
})
export class RegGroupPageModule {}
