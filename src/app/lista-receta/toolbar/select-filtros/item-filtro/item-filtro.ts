import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item-filtro',
  imports: [],
  templateUrl: './item-filtro.html',
  styleUrl: './item-filtro.css'
})
export class ItemFiltro {
  opciones = input.required<string[]>()
}
