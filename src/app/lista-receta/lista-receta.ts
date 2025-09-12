import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ListaRecetaItem } from "./lista-receta-item/lista-receta-item";
import { Toolbar } from "./toolbar/toolbar";
import { Paginacion } from "./paginacion/paginacion";
import { RecetaService } from '../services/receta-service';
import { ActivatedRoute } from '@angular/router';

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
export default class ListaReceta implements OnInit{
  recetaService = inject(RecetaService)
  route = inject(ActivatedRoute)

  protected rangoAMostar = signal<{ inicio: number, fin:number }>({ inicio: 0, fin: 6 });
  private parametroUrl = signal('')

  ngOnInit(){
    this.route.paramMap.subscribe(params => this.parametroUrl.set(params.get('nombre') ?? ''))
  }

  recetasPaginadas = computed(()=>{
    if(!this.parametroUrl()){
      return this.recetaService.recetas().slice(this.rangoAMostar().inicio, this.rangoAMostar().fin);
    }

    return this.recetaService.BuscarReceta(this.parametroUrl()).slice(this.rangoAMostar().inicio, this.rangoAMostar().fin);
  })

  totalRecetas = computed(()=>{
    if(!this.parametroUrl()){
      return this.recetaService.recetas().length
    }

    return this.recetaService.BuscarReceta(this.parametroUrl()).length
  })
}
