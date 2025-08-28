import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {
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
