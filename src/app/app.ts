import { Component, signal } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideBarPage} from './components/shared/side-bar/pages/side-bar-page/side-bar-page';

@Component({
  selector: 'weplan-root',
  imports: [RouterOutlet, SideBarPage],
  template: `<side-bar-page></side-bar-page> <router-outlet></router-outlet> `,
  styles: [
    `
      :host {
        display: flex;
        gap: 1rem;
        height: 100%;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('weplan');
}
