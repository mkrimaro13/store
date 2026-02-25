import { Routes } from '@angular/router';
import { Layout } from '@shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('@products/pages/list/list'),
      },
      {
        path: 'about',
        loadComponent: () => import('@info/pages/about/about'),
      },
      {
        path: 'product',
        redirectTo: '',
      },
      {
        path: 'product/:id',
        loadComponent: () => import('@products/pages/product-details/product-details'),
      },
    ],
  },
  {
    path: '404',
    loadComponent: () => import('@info/pages/not-found/not-found'),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
