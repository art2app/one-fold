import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressbarComponent } from './progressbar';

@NgModule({
  declarations: [
    ProgressbarComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProgressbarComponent),
  ],
  exports: [
    ProgressbarComponent
  ]
})
export class ProgressbarComponentModule {}
