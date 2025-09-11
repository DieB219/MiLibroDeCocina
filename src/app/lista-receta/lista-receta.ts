import { Component, computed, inject, signal } from '@angular/core';
import { ListaRecetaItem } from "./lista-receta-item/lista-receta-item";
import { Toolbar } from "./toolbar/toolbar";
import { Paginacion } from "./paginacion/paginacion";
import { RecetaService } from '../services/receta-service';

interface Receta{
  nombre: string,
  descripcion: string,
  categoria: string,
  dificultad: string,
  duracion: number,
  imagen: string
}

@Component({
  selector: 'app-lista-receta',
  imports: [ListaRecetaItem, Toolbar, Paginacion],
  templateUrl: './lista-receta.html',
  styleUrl: './lista-receta.css'
})
export default class ListaReceta {
  recetaService = inject(RecetaService)

  protected rangoAMostar = signal<{ inicio: number, fin:number }>({ inicio: 0, fin: 6 });

  recetasPaginadas = computed(()=>{
    return this.recetaService.recetas().slice(this.rangoAMostar().inicio, this.rangoAMostar().fin);
  })
}
