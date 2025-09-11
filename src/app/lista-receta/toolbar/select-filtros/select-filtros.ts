import { Component, inject, signal } from '@angular/core';
import { ItemFiltro } from "./item-filtro/item-filtro";
import { RecetaService } from '../../../services/receta-service';

@Component({
  selector: 'app-select-filtros',
  imports: [ItemFiltro],
  templateUrl: './select-filtros.html',
  styleUrl: './select-filtros.css'
})
export class SelectFiltros {
  recetaService = inject(RecetaService)
}
