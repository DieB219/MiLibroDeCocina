import { Component, signal } from '@angular/core';
import { Ingrediente } from '../interfaces/ingrediente-Interface';

@Component({
  selector: 'app-formulario-receta',
  imports: [],
  templateUrl: './formulario-receta.html',
  styleUrl: './formulario-receta.css'
})
export default class FormularioReceta {

  protected title = signal('Crear Nueva Receta')

  protected IngredientesSelect = signal<Ingrediente[]>([])

  ingresarIngrediente(ingrediente: Ingrediente){
    this.IngredientesSelect.update( ingredientes => [...ingredientes, ingrediente] )
  }

}
