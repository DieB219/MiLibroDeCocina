import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./lista-receta/lista-receta'),
    children:[
      {
        path: ':nombre',
        loadComponent: () => import('./lista-receta/lista-receta')
      }
    ]
  },
  {
    path: 'formulario',
    loadComponent: () => import('./formulario-receta/formulario-receta')
  }

];
