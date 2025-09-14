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
  
  dificultadOpciones = signal<string[]>([
    'Fácil',
    'Media',
    'Difícil'
  ])

  categorias = signal<string[]>([
    'Desayuno',
    'Almuerzo',
    'Cena'
  ])
  
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

  BuscarReceta(nombre: string){
    return this.recetas().filter(receta=>{
      const nombreReceta = receta.nombre.toLowerCase()
      return nombreReceta.includes(nombre.toLowerCase())
    })
  }

  obtenerReceta(nombre:string){
    return this.recetas().find(valor => valor.nombre === nombre)
  }

}
