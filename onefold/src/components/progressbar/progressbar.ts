import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProgressbarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'progressbar',
  templateUrl: 'progressbar.html'
})
export class ProgressbarComponent {

  @Input('progress') progress;
  @Input('status') status;

  constructor(){

  }

}
