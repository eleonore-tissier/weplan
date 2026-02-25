import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home),
  },
  {
    path: 'timetable',
    loadComponent: () => import('./components/timetable/timetable').then(m => m.Timetable),
  },
  {
    path: 'list',
    loadComponent: () => import('./components/list/list').then(m => m.List),
  },
  {
    path: '**',
    loadComponent: () => import('./components/shared/not-found-page/not-found-page').then(m => m.NotFoundPage),
  }
];
