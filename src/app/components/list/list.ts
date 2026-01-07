import {Component} from '@angular/core';
import {SideBar} from '../shared/side-bar/side-bar';

@Component({
  selector: 'list',
  template: `
    <side-bar></side-bar>
    <div class="text">
      <p>list works !</p>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      gap: 2rem;
      width: 100%;
      height: 100%;
    }

    .text {
      width: 100%;
    }
  `,
  imports: [
    SideBar
  ]
})
export class List {
}
