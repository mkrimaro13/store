import { Routes } from '@angular/router';
import { Layout } from '@shared/components/layout/layout';
import { List } from './domains/products/pages/list/list';
import { About } from './domains/info/pages/about/about';
import { NotFound } from '@info/pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: List,
      },
      {
        path: 'about',
        component: About,
      },
    ],
  },
  {
    path: '404',
    component: NotFound,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
