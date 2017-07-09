import {Component, View} from 'angular2/core';

@Component({
  selector: 'me'
})

@View({
  templateUrl: 'me.html'
})

export class Me {

  constructor() {
    console.info('Me Component Mounted Successfully');
  }

}
