import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RecetaService } from '../services/receta-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from '../interfaces/receta-interface';

@Component({
  selector: 'app-receta',
  imports: [],
  templateUrl: './detalle-receta.html',
  styleUrl: './detalle-receta.css'
})
export default class DetalleReceta implements OnInit {
  recetaService = inject(RecetaService)
  route = inject(ActivatedRoute)
  ruta = inject(Router)
  
  NombreRecetaURL = signal('')
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.NombreRecetaURL.set(params.get('nombre') ?? ''))
  }

  receta = computed(() => this.recetaService.obtenerReceta(this.NombreRecetaURL()))

  protected coloresDificultad = signal<Record<string,string>>({
    Fácil: 'text-green-600 bg-green-200',
    Media: 'text-orange-600 bg-orange-200',
    Difícil: 'text-red-600 bg-red-200'
  })

  protected textMinutos = computed(() => {
    if(this.receta()?.tiempo === 1) return 'minuto'

    return 'minutos'
  })

  eliminarReceta(){
    this.recetaService.eliminarReceta(this.NombreRecetaURL())
    this.ruta.navigate(['/'])
  }
}
