import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Me} from 'me';

@Component({
  selector: 'main'
})

@View({
  directives: [Me],
  template: `
    <me></me>
  `
})

class Main {

}

bootstrap(Main);
