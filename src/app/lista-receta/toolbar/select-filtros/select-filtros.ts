import { Component, signal } from '@angular/core';
import { ItemFiltro } from "./item-filtro/item-filtro";

@Component({
  selector: 'app-select-filtros',
  imports: [ItemFiltro],
  templateUrl: './select-filtros.html',
  styleUrl: './select-filtros.css'
})
export class SelectFiltros {
  protected dificultadOpciones = signal<string[]>([
    'Fácil',
    'Media',
    'Difícil'
  ])

  protected categorias = signal<string[]>([
    'Desayuno',
    'Almuerzo',
    'Cena'
  ])
}
