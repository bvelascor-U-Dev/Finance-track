import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import ('./shared/pages/home-page.component/home-page.component').then((m)=> m.HomePageComponent),
  },
  {
    path:'expenses',
    loadComponent: () => import ('./expenses/pages/expenses-page.component/expenses-page.component').then((m)=> m.ExpensesPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
