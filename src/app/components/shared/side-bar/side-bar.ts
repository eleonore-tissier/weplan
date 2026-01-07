import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {list} from 'postcss';

@Component({
  selector: 'side-bar',
  template: `
    <div class="home-side-bar">
      <a [routerLink]="'/list'" routerLinkActive="active">Liste de tâches</a>
      <a [routerLink]="'/timetable'" routerLinkActive="active">Emploi du temps</a>
    </div>
  `,
  styles: `
    :host {
      background-color: #C8FABA;
      width: 25%;
      height: 100%;
      padding: 1rem;
    }

    .home-side-bar {
      margin-top: 8rem;
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      a {
        text-decoration: none;
        color: black;
        padding: 1rem;
        border-radius: 5px;
        background: linear-gradient(0.25turn, white, #C8FABA);
      }
    }

  `,
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class SideBar {

  protected readonly list = list;
}
