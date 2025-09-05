import { Component, signal } from '@angular/core';
import { FormIngrediente } from "./form-ingrediente/form-ingrediente";
import { ReactiveFormsModule } from '@angular/forms';
import { FormPasosReceta } from "./form-pasos-receta/form-pasos-receta";

@Component({
  selector: 'app-formulario-receta',
  imports: [FormIngrediente, ReactiveFormsModule, FormPasosReceta],
  templateUrl: './formulario-receta.html',
  styleUrl: './formulario-receta.css'
})
export default class FormularioReceta {

  protected title = signal('Crear Nueva Receta')

}
