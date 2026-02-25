import { Component, signal } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {Home} from './components/home/home';

@Component({
  selector: 'weplan-root',
  imports: [RouterOutlet, RouterModule, Home],
  standalone: true,
  template: ` <router-outlet></router-outlet> `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('weplan');
}
