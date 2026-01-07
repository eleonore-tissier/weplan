import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home),
  },
  {
    path: 'timetable',
  },
  {
    path: 'list',
  },
  {
    path: '**',
    loadComponent: () => import('./components/shared/not-found-page/not-found-page').then(m => m.NotFoundPage),
  }
];
