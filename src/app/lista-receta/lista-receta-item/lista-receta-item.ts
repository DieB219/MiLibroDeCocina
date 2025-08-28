import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Receta{
  nombre: string,
  descripcion: string,
  categoria: string,
  dificultad: string,
  duracion: number,
  imagen: string
}

@Component({
  selector: 'app-lista-receta-item',
  imports: [RouterLink],
  templateUrl: './lista-receta-item.html',
  styleUrl: './lista-receta-item.css'
})
export class ListaRecetaItem {
  receta = input.required<Receta>()

  protected coloresDificultad = signal<Record<string,string>>({
    Fácil: 'text-green-600 bg-green-200',
    Media: 'text-orange-600 bg-orange-200',
    Difícil: 'text-red-600 bg-red-200'
  })
}
