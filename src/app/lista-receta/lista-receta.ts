import { Component, computed, signal } from '@angular/core';
import { ListaRecetaItem } from "./lista-receta-item/lista-receta-item";
import { Toolbar } from "./toolbar/toolbar";
import { Paginacion } from "./paginacion/paginacion";

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
  recetas = signal<Receta[]>([
    {
      nombre: 'Tarta de manzana',
      descripcion: 'Una deliciosa tarta de manzana con canela y azúcar glas.',
      categoria: 'Postre',
      dificultad: 'Media',
      duracion: 60,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Tarte_aux_pommes.jpg'
    },
    {
      nombre: 'Ensalada César',
      descripcion: 'Ensalada fresca con lechuga, pollo a la parrilla, crutones y aderezo César.',
      categoria: 'Ensalada',
      dificultad: 'Fácil',
      duracion: 20,
      imagen: 'https://www.gourmet.cl/wp-content/uploads/2016/09/EnsaladaCesar2.webp'
    },
    {
      nombre: 'Spaghetti Carbonara',
      descripcion: 'Pasta italiana con salsa cremosa de huevo, queso parmesano y panceta.',
      categoria: 'Pasta',
      dificultad: 'Media',
      duracion: 30,
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Classic-spaghetti-carbonara.jpg'
    },
    {
      nombre: 'Sopa de verduras',
      descripcion: 'Sopa nutritiva con una variedad de verduras frescas y caldo casero.',
      categoria: 'Sopa',
      dificultad: 'Fácil',
      duracion: 45,
      imagen: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4010948fb50304fb70ecc9d6947ab4d7.jpg'
    },
    {
      nombre: 'Pollo al curry',
      descripcion: 'Pollo cocinado en una rica salsa de curry con arroz basmati.',
      categoria: 'Plato principal',
      dificultad: 'Difícil',
      duracion: 50,
      imagen: 'https://d36fw6y2wq3bat.cloudfront.net/recipes/pollo-al-curry-con-col-rizada/900/pollo-al-curry-con-col-rizada_version_1698724941.jpg'
    },
    {
      nombre: 'Sopa de verduras 2',
      descripcion: 'Sopa nutritiva con una variedad de verduras frescas y caldo casero.',
      categoria: 'Sopa',
      dificultad: 'Fácil',
      duracion: 45,
      imagen: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4010948fb50304fb70ecc9d6947ab4d7.jpg'
    },
    {
      nombre: 'Pollo al curry 2',
      descripcion: 'Pollo cocinado en una rica salsa de curry con arroz basmati.',
      categoria: 'Plato principal',
      dificultad: 'Difícil',
      duracion: 50,
      imagen: 'https://d36fw6y2wq3bat.cloudfront.net/recipes/pollo-al-curry-con-col-rizada/900/pollo-al-curry-con-col-rizada_version_1698724941.jpg'
    }
  ])

  protected rangoAMostar = signal<{ inicio: number, fin:number }>({ inicio: 0, fin: 6 });

  recetasPaginadas = computed(()=>{
    return this.recetas().slice(this.rangoAMostar().inicio, this.rangoAMostar().fin);
  })
}
