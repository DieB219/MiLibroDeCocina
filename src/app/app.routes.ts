import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'formulario',
    loadComponent: () => import('./formulario-receta/formulario-receta')
  },
  {
    path: '',
    loadComponent: () => import('./lista-receta/lista-receta')
  },
  {
    path: ':nombre',
    loadComponent: () => import('./lista-receta/lista-receta')
  }

];
