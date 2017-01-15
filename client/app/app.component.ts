import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: __uri('./app.component.html'),
})
export class AppComponent {
  title: string;
  commints: Array<string>;

  constructor () {
    this.title = '1';
    this.commints = [
      'a',
      'b',
      'c',
      'd',
    ];
  }
}
