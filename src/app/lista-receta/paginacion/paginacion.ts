import { Component, computed, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  imports: [],
  templateUrl: './paginacion.html',
  styleUrl: './paginacion.css'
})
export class Paginacion {

  recetasTotales = input.required<number>()
  rango = output<{ inicio: number, fin:number }>();

  paginaActual = signal(1);
  recetasPorPagina = signal(6);

  paginasTotales = computed(() => {
    return Math.ceil(this.recetasTotales() / this.recetasPorPagina());
  })

  numeroDePaginas = computed(() => {
    return Array.from({ length: this.paginasTotales() }, (_, i) => i + 1);
  });

  rangoDeRecetas = computed(() => {
    const inicio = (this.paginaActual() - 1) * this.recetasPorPagina();
    const fin = inicio + this.recetasPorPagina();
    return { inicio, fin };
  });

  constructor() {
    effect(() => {
      this.rango.emit(this.rangoDeRecetas());
    });
  }

  cambiarPagina(nuevaPagina: number) {
    if (nuevaPagina >= 1 && nuevaPagina <= this.paginasTotales()) {
      this.paginaActual.set(nuevaPagina);
    }
  }
}
