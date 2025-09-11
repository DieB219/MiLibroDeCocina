import { effect, Injectable, signal } from '@angular/core';
import { Receta } from '../interfaces/receta-interface';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetas = signal<Receta[]>(JSON.parse(localStorage.getItem('recetas') ?? '[]'))
  
  guardarReceta(receta: Receta){
    this.recetas.update(recetas => [...recetas, receta])
    localStorage.setItem('recetas', JSON.stringify(this.recetas()))
  }

  validarImagenReceta(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }
}
