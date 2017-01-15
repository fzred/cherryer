import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: __uri('./app.component.html'),
//   template: `
// <h1>Hello {{title}}</h1>
// <ul>
//       <li *ngFor="let hero of commints">
//         {{ hero }}
//       </li>
//     </ul>
// `,
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
