import { effect, Injectable, signal } from '@angular/core';
import { Receta } from '../interfaces/receta-interface';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(){
    effect(()=>{
      localStorage.setItem('recetas', JSON.stringify(this.recetas()))
    })
  }

  recetas = signal<Receta[]>(JSON.parse(localStorage.getItem('recetas') ?? '[]'))
  
  guardarReceta(receta: Receta){
    this.recetas.update(recetas => [...recetas, receta])
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
