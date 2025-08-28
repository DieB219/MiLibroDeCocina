import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'recetas',
    loadComponent: () => import('./lista-receta/lista-receta')
  }

];
