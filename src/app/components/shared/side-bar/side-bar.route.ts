import {Route} from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/side-bar-page/side-bar-page').then(m => m.SideBarPage),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/side-bar-home/side-bar-home').then(m => m.SideBarHome),
      },
      {
        path: 'timetable',
        loadComponent: () => import('./pages/side-bar-timetable/side-bar-timetable').then(m => m.SideBarTimetable),
      },
      {
        path: 'list',
        loadComponent: () => import('./pages/side-bar-list/side-bar-list').then(m => m.SideBarList),
      }
    ]
  }
];
