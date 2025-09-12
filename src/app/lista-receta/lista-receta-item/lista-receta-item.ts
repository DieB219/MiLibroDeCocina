import { Component, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Receta } from '../../interfaces/receta-interface';
import { RecetaService } from '../../services/receta-service';

@Component({
  selector: 'app-lista-receta-item',
  imports: [RouterLink],
  templateUrl: './lista-receta-item.html',
  styleUrl: './lista-receta-item.css'
})
export class ListaRecetaItem implements OnInit{
  recetaService = inject(RecetaService)
  receta = input.required<Receta>()

  protected imagenValida = signal(false)
  ngOnInit() {
    this.recetaService.validarImagenReceta(this.receta().urlImagen)
    .then(resultado => this.imagenValida.set(resultado))
  }

  protected coloresDificultad = signal<Record<string,string>>({
    Fácil: 'text-green-600 bg-green-200',
    Media: 'text-orange-600 bg-orange-200',
    Difícil: 'text-red-600 bg-red-200'
  })
}
