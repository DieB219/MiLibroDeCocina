import { Component, inject, signal } from '@angular/core';
import { Ingrediente } from '../../interfaces/ingrediente-Interface';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ingrediente',
  imports: [ReactiveFormsModule],
  templateUrl: './form-ingrediente.html',
  styleUrl: './form-ingrediente.css'
})
export class FormIngrediente {

  private fb = inject(NonNullableFormBuilder)
  formIngredientes = this.fb.group({
    nombre: ['', [Validators.required]],
    cantidad: [1, [Validators.required]],
    medida: ['', [Validators.required]]
  })

  ingredientesSeleccionados = signal<Ingrediente[]>([]) 

  agregarIngrediente() {
    if(this.formIngredientes.valid) {
      const ingrediente: Ingrediente = this.formIngredientes.getRawValue()
      this.ingredientesSeleccionados.update(ingredientes => [...ingredientes, ingrediente]);
      this.formIngredientes.reset();
    }
    else{this.formIngredientes.markAllAsTouched()}

  }
}
